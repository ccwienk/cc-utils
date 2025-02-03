'''
utils wrapping github3.py's relase-API
'''

import collections.abc as typehints
import logging

import github3.repos
import github3.repos.release

import github.limits
import version

logger = logging.getLogger(__name__)


def body_or_replacement(
    body: str,
    replacement: str='body was too large (limit: {limit} / actual: {actual})',
    limit: int=github.limits.release_body,
) -> tuple[str, bool]:
    '''
    convenience function that will check whether given body is short enough to be accepted
    by GitHub's API. If so, passed body will be returned as first element of returned tuple, else
    replacement value.

    The second value of returned tuple will indicate whether original body was returned. Callers
    may use this hint to perform a mitigation.

    limit may be overwritten (but this is not recommended; see github.limits for more details).
    '''
    if github.limits.fits(
        body,
        limit=limit,
    ):
        return body, True

    return replacement.format(
        limit=limit,
        actual=len(body),
    ), False


def find_draft_release(
    repository: github3.repos.Repository,
    name: str,
) -> github3.repos.release.Release | None:
    '''
    finds the given draft-release. For draft-releases, lookup has to be done that way, as
    there is no way of directly retrieving a draft-release (as those do not yet have a tag)
    '''
    # at some point in time, github.com would return http-500 if there were more than 1020
    # releases; as draft-releases are typically not too old (and such great numbers of releases
    # are uncommon), this should be okay to hardcode. Todo: check whether this limit is still
    # valid.
    max_releases = 1020
    for release in repository.releases(number=max_releases):
        if not release.draft:
            continue
        if release.name == name:
            return release


def delete_outdated_draft_releases(
    repository: github3.repos.Repository,
) -> typehints.Generator[tuple[github3.repos.release.Release, bool], None, None]:
    '''Find outdated draft releases and try to delete them

    Yields tuples containing a release and a boolean indicating whether its deletion was
    successful.

    A draft release is considered outdated iff:
    1: its version is smaller than the greatest release version (according to semver) AND
        2a: it is NOT a hotfix draft release AND
        2b: there are no hotfix draft releases with the same major and minor version
        OR
        3a: it is a hotfix draft release AND
        3b: there is a hotfix draft release of greater version (according to semver)
            with the same major and minor version
    '''

    releases = [release for release in repository.releases(number=20)]
    non_draft_releases = [release for release in releases if not release.draft]
    draft_releases = [release for release in releases if release.draft]
    greatest_release_version = find_greatest_github_release_version(non_draft_releases)

    if greatest_release_version is not None:
        draft_releases_to_delete = outdated_draft_releases(
                draft_releases=draft_releases,
                greatest_release_version=greatest_release_version,
        )
    else:
        draft_releases_to_delete = []

    for release in draft_releases_to_delete:
        yield release, release.delete()


def outdated_draft_releases(
    draft_releases: list[github3.repos.release.Release],
    greatest_release_version: str,
):
    '''Find outdated draft releases from a list of draft releases and return them. This is achieved
    by partitioning the release versions according to their joined major and minor version.
    Partitions are then checked:
        - if there is only a single release in a partition it is either a hotfix release
            (keep corresponding release) or it is not (delete if it is not the greatest release
            according to semver)
        - if there are multiple releases versions in a partition, keep only the release
            corresponding to greatest (according to semver)
    '''

    greatest_release_version_info = version.parse_to_semver(greatest_release_version)

    def _has_semver_draft_prerelease_label(release_name):
        version_info = version.parse_to_semver(release_name)
        if version_info.prerelease != 'draft':
            return False
        return True

    autogenerated_draft_releases = [
        release for release in draft_releases
        if release.name
        and version.is_semver_parseable(release.name)
        and _has_semver_draft_prerelease_label(release.name)
    ]

    draft_release_version_infos = [
        version.parse_to_semver(release.name)
        for release in autogenerated_draft_releases
    ]

    def _yield_outdated_version_infos_from_partition(partition):
        if len(partition) == 1:
            version_info = partition.pop()
            if version_info < greatest_release_version_info and version_info.patch == 0:
                yield version_info
        else:
            yield from [
                version_info
                for version_info in partition[1:]
            ]

    outdated_version_infos = list()
    for partition in version.partition_by_major_and_minor(draft_release_version_infos):
        outdated_version_infos.extend(_yield_outdated_version_infos_from_partition(partition))

    outdated_draft_releases = [
        release
        for release in autogenerated_draft_releases
        if version.parse_to_semver(release.name) in outdated_version_infos
    ]

    return outdated_draft_releases


def find_greatest_github_release_version(
    releases: list[github3.repos.release.Release],
    warn_for_unparseable_releases: bool = True,
    ignore_prerelease_versions: bool = False,
):
    # currently, non-draft-releases are not created with a name by us. Use the tag name as fallback
    release_versions = [
        release.name if release.name else release.tag_name
        for release in releases
    ]

    def filter_non_semver_parseable_releases(release_name):
        try:
            version.parse_to_semver(release_name)
            return True
        except ValueError:
            if warn_for_unparseable_releases:
                logger.warning(f'ignoring release {release_name=} (not semver)')
            return False

    release_versions = [
        name for name in filter(filter_non_semver_parseable_releases, release_versions)
    ]

    release_version_infos = [
        version.parse_to_semver(release_version)
        for release_version in release_versions
    ]
    latest_version = version.find_latest_version(
        versions=release_version_infos,
        ignore_prerelease_versions=ignore_prerelease_versions,
    )
    if latest_version:
        return str(latest_version)
    else:
        return None
