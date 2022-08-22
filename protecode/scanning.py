import logging
import typing

import ci.log
import protecode.assessments
import protecode.client
import protecode.model as pm
import protecode.util


logger = logging.getLogger(__name__)
ci.log.configure_default_logging(print_thread_id=True)


class ResourceGroupProcessor:
    def __init__(
        self,
        scan_results: typing.Dict[str, typing.Iterable[pm.Product]],
        protecode_client: protecode.client.ProtecodeApi,
        group_id: int=None,
        reference_group_ids: typing.Sequence[int]=(),
        cvss_threshold: float=7.0,
    ):
        self.scan_results = scan_results
        self.group_id = group_id
        self.reference_group_ids = reference_group_ids
        self.cvss_threshold = cvss_threshold
        self.protecode_client = protecode_client

    def _products_with_relevant_triages(
        self,
        artifact_group: pm.ArtifactGroup,
    ) -> typing.Iterator[pm.Product]:
        relevant_group_ids = set(self.reference_group_ids)
        relevant_group_ids.add(self.group_id)

        metadata = protecode.util.component_artifact_metadata(
            component_artifact=artifact_group.component_artifacts[0],
            # we want to find all possibly relevant scans, so omit all version data
            omit_component_version=True,
            omit_resource_version=True,
        )

        for id in relevant_group_ids:
            products = list(self.protecode_client.list_apps(
                group_id=id,
                custom_attribs=metadata,
            ))
            logger.info(
                f'Found {len(products)} relevant scans for artifact group {artifact_group.name} in '
                f'Group {id}'
            )
            yield from products

    def iter_components_with_vulnerabilities_and_assessments(self, artifact_group: pm.ArtifactGroup):
        for product in self._products_with_relevant_triages(artifact_group=artifact_group):
            result = self.protecode_client.wait_for_scan_result(product_id=product.product_id())

            yield from protecode.util.iter_vulnerabilities_with_assessments(
                result=result
            )

    def scan_requests(
        self,
        artifact_group: pm.ArtifactGroup,
        known_artifact_scans: typing.Dict[str, typing.Iterable[pm.Product]]
    ) -> typing.Iterable[pm.ScanRequest]:
        match artifact_group:
            case pm.OciArtifactGroup():
                for component_artifact in artifact_group.component_artifacts:
                    # generate one ScanRequest for each ComponentArtifact
                    # First, find product ID by meta-data
                    component_artifact_metadata = protecode.util.component_artifact_metadata(
                        component_artifact=component_artifact,
                        omit_component_version=False,
                        omit_resource_version=False,
                    )
                    target_product_id = protecode.util._matching_analysis_result_id(
                        component_artifact_metadata=component_artifact_metadata,
                        analysis_results=known_artifact_scans.get(artifact_group.name),
                    )
                    if target_product_id:
                        logger.info(
                            f'Found existing scan ({target_product_id}) for {artifact_group}'
                        )
                    else:
                        logger.info(f'No existing scan for {artifact_group} - will create new one.')
                    yield pm.ScanRequest(
                        component_artifacts=component_artifact,
                        scan_content=pm.OciResourceBinary(
                            artifact=component_artifact.artifact
                        ),
                        display_name=artifact_group.name,
                        target_product_id=target_product_id,
                        custom_metadata=component_artifact_metadata,
                    )

            case pm.TarRootfsArtifactGroup():
                # Generate one ScanRequest for all ComponentArtifacts. For this kind of ArtifactGroup
                # we merge all appropriate (tar)artifacts into one big tararchive
                component_artifact_metadata = protecode.util.component_artifact_metadata(
                    # All components have the same version so we can use any
                    # ComponentArtifacts for the metadata-calculation.
                    component_artifact=artifact_group.component_artifacts[0],
                    omit_component_version=False,
                    omit_resource_version=False,
                )
                target_product_id = protecode.util._matching_analysis_result_id(
                    component_artifact_metadata=component_artifact_metadata,
                    analysis_results=known_artifact_scans.get(artifact_group.name),
                )

                if target_product_id:
                    logger.info(f'Found existing scan ({target_product_id}) for {artifact_group}')
                else:
                    logger.info(f'No existing scan for {artifact_group} - will create new one.')

                yield pm.ScanRequest(
                    component_artifacts=artifact_group.component_artifacts[0],
                    scan_content=pm.TarRootfsAggregateResourceBinary(
                        artifacts=[
                            component_artifact.artifact
                            for component_artifact in artifact_group.component_artifacts
                        ],
                        tarfile_retrieval_function=protecode.util.fileobj_for_s3_access,
                        tarfile_naming_function=(
                            lambda resource: resource.extraIdentity['platform']
                        )
                    ),
                    display_name=artifact_group.name,
                    target_product_id=target_product_id,
                    custom_metadata=component_artifact_metadata,
                )

            case _:
                raise NotImplementedError(artifact_group)

    def process_scan_request(
        self,
        scan_request: pm.ScanRequest,
        processing_mode: pm.ProcessingMode,
    ) -> pm.AnalysisResult:
        if processing_mode is pm.ProcessingMode.FORCE_UPLOAD:
            if (job_id := scan_request.target_product_id):
                # reupload binary
                return self.protecode_client.upload(
                    application_name=scan_request.display_name,
                    group_id=self.group_id,
                    data=scan_request.scan_content.upload_data(),
                    replace_id=job_id,
                    custom_attribs=scan_request.custom_metadata,
                )
            else:
                # upload new product
                return self.protecode_client.upload(
                    application_name=scan_request.display_name,
                    group_id=self.group_id,
                    data=scan_request.scan_content.upload_data(),
                    custom_attribs=scan_request.custom_metadata,
                )
        elif processing_mode is pm.ProcessingMode.RESCAN:
            if (existing_id := scan_request.target_product_id):
                # check if result can be reused
                scan_result = self.protecode_client.scan_result(product_id=existing_id)
                if scan_result.is_stale() and not scan_result.has_binary():
                    # no choice but to upload
                    return self.protecode_client.upload(
                        application_name=scan_request.display_name,
                        group_id=self.group_id,
                        data=scan_request.scan_content.upload_data(),
                        replace_id=existing_id,
                        custom_attribs=scan_request.custom_metadata,
                    )

                # update name/metadata unless identical
                if scan_result.name() != scan_request.display_name:
                    self.protecode_client.set_product_name(
                        product_id=existing_id,
                        name=scan_request.display_name,
                    )
                if scan_result.custom_data() != scan_request.custom_metadata:
                    self.protecode_client.set_metadata(
                        product_id=existing_id,
                        custom_attribs=scan_request.custom_metadata,
                    )

                if not scan_result.is_stale():
                    pass # no special handling required
                if scan_result.has_binary():
                    # binary is still available, trigger rescan
                    logger.info(
                        f'Triggering rescan for {existing_id} ({scan_request.display_name()})'
                    )
                    self.protecode_client.rescan(product_id=existing_id)
                return self.protecode_client.scan_result(product_id=existing_id)
            else:
                return self.protecode_client.upload(
                    application_name=scan_request.display_name,
                    group_id=self.group_id,
                    data=scan_request.scan_content.upload_data(),
                    custom_attribs=scan_request.custom_metadata,
                )
        else:
            raise NotImplementedError(processing_mode)

    def apply_auto_triage(
        self,
        scan_request: pm.ScanRequest,
    ) -> pm.AnalysisResult:
        if (product_id := scan_request.target_product_id):
            scan_result = self.protecode_client.scan_result(product_id=product_id)
        else:
            # no product id present means the scan result created a new scan in protecode.
            # Fetch it (it _must_ exist) and process
            products = self.protecode_client.list_apps(
                group_id=self.group_id,
                custom_attribs=scan_request.custom_metadata,
            )

            if (p := len(products)) == 0:
                raise RuntimeError(
                    f'Unable to find scan created by scan request {scan_request} to auto-triage.'
                )
            if p >= 2:
                raise RuntimeError(
                    f'Found {p} scans possibly created by scan request {scan_request} '
                    'to auto-triage.'
                )
            scan_result = self.protecode_client.scan_result(product_id=products[0].product_id())

        protecode.assessments.auto_triage(
            analysis_result=scan_result,
            cvss_threshold=self.cvss_threshold,
            protecode_api=self.protecode_client,
        )

        # return updated scan result
        return self.protecode_client.scan_result(product_id=product_id)

    def _wrap_into_bdba_results(
        self,
        scan_requests_and_results: typing.Iterable[typing.Tuple[pm.ScanRequest, pm.AnalysisResult]],
    ) -> typing.Generator[pm.BDBA_ScanResult, None, None]:
        for scan_request, scan_result in scan_requests_and_results:
            yield pm.BDBA_ScanResult(
                component=scan_request.component_artifacts.component,
                artifact=scan_request.component_artifacts.artifact,
                status=pm.UploadStatus.DONE,
                result=scan_result,
            )

    def _upload_and_wait_for_scans(
        self,
        scan_requests: typing.Iterable[pm.ScanRequest],
        processing_mode: pm.ProcessingMode,
    ) -> typing.Generator[pm.AnalysisResult, None, None]:
        for scan_request in scan_requests:
            scan_result = self.process_scan_request(
                scan_request=scan_request,
                processing_mode=processing_mode,
            )
            yield protecode.util.wait_for_scan_to_finish(
                scan=scan_result,
                protecode_api=self.protecode_client,
            )

    def process(
        self,
        artifact_group: pm.ArtifactGroup,
        processing_mode: pm.ProcessingMode,
    ) -> typing.Iterator[pm.BDBA_ScanResult]:
        logger.info(f'Processing ArtifactGroup {artifact_group}')
        scan_requests = list(self.scan_requests(
            artifact_group=artifact_group,
            known_artifact_scans=self.scan_results,
        ))

        logger.info(f'Generated {len(scan_requests)} scan requests for {artifact_group}')

        target_results = list(
            self._upload_and_wait_for_scans(
                scan_requests=scan_requests,
                processing_mode=processing_mode,
            )
        )

        # todo: deduplicate/merge assessments
        component_vulnerabilities_with_assessments = tuple(
            self.iter_components_with_vulnerabilities_and_assessments(artifact_group=artifact_group)
        )

        logger.info(
            f'found {len(component_vulnerabilities_with_assessments)} relevant triages to import'
        )

        for target in target_results:
            protecode.assessments.add_assessments_if_none_exist(
                tgt=target,
                tgt_group_id=self.group_id,
                assessments=component_vulnerabilities_with_assessments,
                protecode_client=self.protecode_client,
            )

        # finally, auto-triage remaining vulnerabilities (updates fetched result) if configured.
        scan_requests_and_results = [
            (request, result) if not request.auto_triage_scan()
            else (request, self.apply_auto_triage(scan_request=request))
            for request, result in scan_requests_and_results
        ]

        yield from self._wrap_into_bdba_results(scan_requests_and_results)
