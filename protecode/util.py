# Copyright (c) 2019-2020 SAP SE or an SAP affiliate company. All rights reserved. This file is
# licensed under the Apache Software License, v. 2 except as noted otherwise in the LICENSE file
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import datetime
import functools
import logging
import tabulate
import typing

import boto3
import botocore

import ccc.delivery
import ccc.gcp
import ccc.protecode
import ci.log
import dso.model
import gci.componentmodel as cm
import protecode.client
import protecode.model as pm

logger = logging.getLogger(__name__)
ci.log.configure_default_logging(print_thread_id=True)


def upload_results_to_deliverydb(
    delivery_client,
    results: typing.Iterable[pm.BDBA_ScanResult],
):
    logger.info('uploading results to deliverydb')
    try:
        for artefact_metadata in iter_artefact_metadata(results):
            delivery_client.upload_metadata(data=artefact_metadata)
    except:
        import traceback
        traceback.print_exc()


def filter_and_display_upload_results(
    upload_results: typing.Sequence[pm.BDBA_ScanResult],
    cve_threshold=7,
) -> typing.Sequence[pm.BDBA_ScanResult]:
    # we only require the analysis_results for now

    results_without_components = []
    results_below_cve_thresh = []
    results_above_cve_thresh = []

    for upload_result in upload_results:
        resource = upload_result.artifact

        if isinstance(upload_result, pm.BDBA_ScanResult):
            result = upload_result.result
        else:
            result = upload_result

        components = result.components()
        if not components:
            results_without_components.append(upload_result)
            continue

        greatest_cve = upload_result.greatest_cve_score

        if greatest_cve >= cve_threshold:
            try:
                # XXX HACK: just any image ref from group
                image_ref = resource.access.imageReference
                grafeas_client = ccc.gcp.GrafeasClient.for_image(image_ref)
                gcr_cve = -1
                for r in grafeas_client.filter_vulnerabilities(
                    image_ref,
                    cvss_threshold=cve_threshold,
                ):
                    gcr_cve = max(gcr_cve, r.vulnerability.cvssScore)
                # TODO: skip if < threshold - just report for now
            except Exception:
                import traceback
                logger.warning(
                    f'failed to retrieve vulnerabilies from gcr {traceback.format_exc()}'
                )

            results_above_cve_thresh.append(upload_result)
            continue
        else:
            results_below_cve_thresh.append(upload_result)
            continue

    if results_without_components:
        logger.warning(
            f'Protecode did not identify components for {len(results_without_components)=}:\n'
        )
        for result in results_without_components:
            print(result.result.display_name())
        print('')

    def render_results_table(upload_results: typing.Sequence[pm.BDBA_ScanResult]):
        header = ('Component Name', 'Greatest CVE')
        results = sorted(upload_results, key=lambda e: e.greatest_cve_score)

        def to_result(result):
            if isinstance(result, pm.BDBA_ScanResult):
                return result.result
            return result

        result = tabulate.tabulate(
            [(to_result(r).display_name(), r.greatest_cve_score) for r in results],
            headers=header,
            tablefmt='fancy_grid',
        )
        print(result)

    if results_below_cve_thresh:
        logger.info(f'The following components were below configured cve threshold {cve_threshold}')
        render_results_table(upload_results=results_below_cve_thresh)
        print('')

    if results_above_cve_thresh:
        logger.warning('The following components have critical vulnerabilities:')
        render_results_table(upload_results=results_above_cve_thresh)

    return results_above_cve_thresh, results_below_cve_thresh


def iter_artefact_metadata(
    results: typing.Collection[pm.BDBA_ScanResult],
) -> typing.Generator[dso.model.GreatestCVE, None, None]:
    for result in results:
        artefact_ref = dso.model.component_artefact_id_from_ocm(
            component=result.component,
            artefact=result.artifact,
        )
        meta = dso.model.Metadata(
            datasource=dso.model.Datasource.BDBA,
            type=dso.model.Datatype.VULNERABILITIES_AGGREGATED,
            creation_date=datetime.datetime.now()
        )
        cve = dso.model.GreatestCVE(
            greatestCvss3Score=result.greatest_cve_score,
            reportUrl=result.result.report_url()
        )
        yield dso.model.ArtefactMetadata(
            artefact=artefact_ref,
            meta=meta,
            data=cve,
        )

        meta = dso.model.Metadata(
            datasource=dso.model.Datasource.BDBA,
            type=dso.model.Datatype.LICENSES_AGGREGATED,
            creation_date=datetime.datetime.now()
        )
        license_names = list(dict.fromkeys(
            [
                component.license().name()
                for component in result.result.components()
                if component.license()
            ]
        ))
        license = dso.model.LicenseSummary(
            licenses=license_names,
        )
        yield dso.model.ArtefactMetadata(
            artefact=artefact_ref,
            meta=meta,
            data=license,
        )

        meta = dso.model.Metadata(
            datasource=dso.model.Datasource.BDBA,
            type=dso.model.Datatype.COMPONENTS,
            creation_date=datetime.datetime.now()
        )
        components = list(dict.fromkeys(
            [
                dso.model.ComponentVersion(
                    name=component.name(),
                    version=component.version(),
                )
                for component in result.result.components()
            ]
        ))
        component = dso.model.ComponentSummary(
            components=components
        )
        yield dso.model.ArtefactMetadata(
            artefact=artefact_ref,
            meta=meta,
            data=component,
        )

        meta = dso.model.Metadata(
            datasource=dso.model.Datasource.BDBA,
            type=dso.model.Datatype.FILESYSTEM_PATHS,
            creation_date=datetime.datetime.now()
        )

        # avoid duplicates
        filesystem_paths = set(
            dso.model.FilesystemPath(
                path=path,
                digest=digest,
            )
            for component in result.result.components()
            for path, digest in iter_filesystem_paths(component=component)
        )

        filesystem_paths = dso.model.FilesystemPaths(
            paths=list(filesystem_paths),
        )

        yield dso.model.ArtefactMetadata(
            artefact=artefact_ref,
            meta=meta,
            data=filesystem_paths,
        )


def iter_filesystem_paths(
    component: pm.Component,
    file_type: str | None = 'elf'
) -> typing.Generator[tuple[str, str], None, None]:
    for ext_obj in component.extended_objects():
        for path_infos in ext_obj.raw.get('extended-fullpath', []):

            # be defensive, dont break
            if not (fullpath := path_infos.get('path')):
                continue
            if not (path_info_type := path_infos.get('type')):
                continue

            if not file_type:
                yield fullpath, ext_obj.sha1()

            if path_info_type == file_type:
                yield fullpath, ext_obj.sha1()


def enum_triages(
    result: pm.AnalysisResult,
) -> typing.Iterator[typing.Tuple[pm.Component, pm.Triage]]:
    for component in result.components():
        for vulnerability in component.vulnerabilities():
            for triage in vulnerability.triages():
                yield component, triage


def enum_vulnerabilities(
    result: pm.AnalysisResult,
    component_name: str = None,
    component_version: str = None,
) -> typing.Iterator[pm.Vulnerability]:
    for component in result.components():
        if component_name and component.name() != component_name:
            continue
        if component_version and component.version() != component_version:
            continue
        yield from component.vulnerabilities()


def enum_component_versions(
    scan_result: pm.AnalysisResult,
    component_name: str,
) -> typing.Iterator[str]:
    for component in scan_result.components():
        if component.name() == component_name:
            yield component.version()


def wait_for_scans_to_finish(
    scans: typing.Iterable[pm.AnalysisResult],
    protecode_api: protecode.client.ProtecodeApi
) -> typing.Generator[pm.AnalysisResult, None, None]:
    for scan in scans:
        yield wait_for_scan_to_finish(scan, protecode_api)
        logger.info(f'finished waiting for {scan.product_id()}')


def wait_for_scan_to_finish(
    scan: pm.AnalysisResult,
    protecode_api: protecode.client.ProtecodeApi,
) -> pm.AnalysisResult:
    product_id = scan.product_id()
    logger.info(f'waiting for {product_id}')
    return protecode_api.wait_for_scan_result(product_id)


@functools.lru_cache
def _image_digest(image_reference: str) -> str:
    oci_client = ccc.oci.oci_client()
    return oci_client.to_digest_hash(
        image_reference=image_reference,
    )


def component_artifact_metadata(
    component_artifact: pm.ComponentArtifact,
    omit_component_version: bool,
    omit_resource_version: bool,
):
    '''Build a metadata-dict for the given ComponentArtifact.

    The resulting dict is usually referred to as "Custom data" by Protecode and is used to filter
    results when searching.
    '''
    metadata = {
        'COMPONENT_NAME': component_artifact.component.name,
    }
    if not omit_component_version:
        metadata.update({
            'COMPONENT_VERSION': component_artifact.component.version,
        })
    match component_artifact.artifact.access:
        case cm.OciAccess():
            metadata['IMAGE_REFERENCE_NAME'] = component_artifact.artifact.name
            metadata['RESOURCE_TYPE'] = 'ociImage'
            if not omit_resource_version:
                img_ref_with_digest = _image_digest(
                    image_reference=component_artifact.artifact.access.imageReference
                )
                digest = img_ref_with_digest.split('@')[-1]
                metadata['IMAGE_REFERENCE'] = component_artifact.artifact.access.imageReference
                metadata['IMAGE_VERSION'] = component_artifact.artifact.version
                metadata['IMAGE_DIGEST'] = digest
                metadata['DIGEST_IMAGE_REFERENCE'] = str(img_ref_with_digest)
        case cm.S3Access():
            metadata['RESOURCE_TYPE'] = 'application/tar+vm-image-rootfs'
            if not omit_resource_version:
                metadata['IMAGE_VERSION'] = component_artifact.artifact.version
        case _:
            raise NotImplementedError(component_artifact.artifact.access)

    return metadata


def _matching_analysis_result_id(
    component_artifact_metadata: dict[str, str],
    analysis_results: typing.Iterable[pm.Product],
) -> int | None:
    # This is a helper function that is used when we create new ScanRequests for a given artifact
    # group. Since a given artifact group can trigger multiple scans in protecode, we want to be
    # able to find the correct one from a set of possible choices (if there is one).
    def filter_func(other_dict: typing.Dict[str, str]):
        # filter-function to find the correct match. We consider a given dict a match if
        # it contains all keys we have and the values associated with these keys are identical.
        # Note: That means that (manually) added protecode-metadata will not interfere.
        for key in component_artifact_metadata:
            if key not in other_dict.keys():
                return False
            if other_dict[key] != component_artifact_metadata[key]:
                return False
        return True

    filtered_results = (
            r for r in analysis_results
            if filter_func(r.custom_data())
        )
    result = next(filtered_results, None)

    # There should be at most one possible candidate
    if next_result := next(filtered_results, None):
        raise RuntimeError(
            'More than one scan result found for component artifact. '
            f'Found {result} and {next_result} - aborting, but there might be more. Please check '
            'for additional protecode scans with identical custom data'
        )

    if result:
        return result.product_id()
    else:
        return None


def iter_vulnerabilities(
    result: pm.AnalysisResult,
) -> typing.Generator[tuple[pm.Component, pm.Vulnerability], None, None]:
    for component in result.components():
        for vulnerability in component.vulnerabilities():
            yield component, vulnerability


def iter_vulnerabilities_with_assessments(
    result: pm.AnalysisResult,
):
    for component, vulnerability in iter_vulnerabilities(result=result):
        if not vulnerability.has_triage():
            continue
        yield component, vulnerability, tuple(vulnerability.triages())


def fileobj_for_s3_access(
    resource: cm.Resource,
) -> typing.BinaryIO:
    '''returns a filelike object that can be used to read the contents of a resource that
    has an access of type 's3'

    The s3-object the access points at must be publicly readable, no authentication is attempted.
    '''
    # get a file-like object to stream from the given resource's access
    access = resource.access
    if not isinstance(access, cm.S3Access):
        raise RuntimeError(
            "Can only acces content in s3 for resources whose access is of type 's3'"
    )
    s3_client = boto3.client(
        's3',
        # anonymous access
        config=botocore.client.Config(signature_version=botocore.UNSIGNED)
    )
    s3_object = s3_client.get_object(Bucket=access.bucketName, Key=access.objectKey)
    return s3_object['Body']
