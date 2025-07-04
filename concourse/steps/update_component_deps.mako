<%def
  name="update_component_deps_step(job_step, job_variant, github_cfg_name, indent)",
  filter="indent_func(indent),trim"
>
<%
import dataclasses
import enum

from concourse.steps import step_lib
from makoutil import indent_func
import ocm

main_repo = job_variant.main_repository()
repo_name = main_repo.repo_name()
repo_relpath = main_repo.resource_name()
repo_owner = main_repo.repo_owner()
repo_branch = main_repo.branch()

update_component_deps_trait = job_variant.trait('update_component_deps')
set_dependency_version_script_path = update_component_deps_trait.set_dependency_version_script_path()
after_merge_callback = update_component_deps_trait.after_merge_callback()
upstream_update_policy = update_component_deps_trait.upstream_update_policy()
ignore_prerelease_versions=update_component_deps_trait.ignore_prerelease_versions()
pullrequest_body_suffix = update_component_deps_trait.pullrequest_body_suffix
include_bom_diff = update_component_deps_trait.include_bom_diff
component_descriptor_trait = job_variant.trait('component_descriptor')
ocm_repository_mappings = component_descriptor_trait.ocm_repository_mappings()

set_version_script_image_cfg = \
    update_component_deps_trait.set_dependency_version_script_container_image()
if set_version_script_image_cfg:
    set_version_script_image = set_version_script_image_cfg.image_reference()
else:
    set_version_script_image = None

%>
import logging
import os
import subprocess
import sys

import dacite

import ccc.delivery
import ccc.github
import ccc.oci
import ci.util
import cnudie.util
import cnudie.retrieve
import concourse.model.traits.release
import concourse.model.traits.update_component_deps
import ctx
import ocm
import ocm.gardener
import github.util
import gitutil
import oci.auth as oa

logger = logging.getLogger('step.update_component_deps')


${step_lib('update_component_deps')}


# must point to this repository's root directory
REPO_ROOT = os.path.abspath('${repo_relpath}')
REPO_BRANCH = '${repo_branch}'
REPO_OWNER = '${repo_owner}'
REPO_NAME = '${repo_name}'

cfg_factory = ci.util.ctx().cfg_factory()
github_cfg_name = '${github_cfg_name}'
github_cfg=cfg_factory.github(github_cfg_name)

git_helper = gitutil.GitHelper(
    repo=REPO_ROOT,
    git_cfg=github_cfg.git_cfg(
        repo_path=f'{REPO_OWNER}/{REPO_NAME}',
    ),
)
merge_policy_configs = [
    concourse.model.traits.update_component_deps.MergePolicyConfig(cfg)
    for cfg in ${[p.raw for p in update_component_deps_trait.merge_policies()]}
]
merge_policies = concourse.model.traits.update_component_deps.MergePolicies(
    policies=merge_policy_configs,
)
# indicates whether or not an upstream component was defined as a reference
upstream_component_name = os.environ.get('UPSTREAM_COMPONENT_NAME', None)
UPGRADE_TO_UPSTREAM = bool(upstream_component_name)

logger.info(f'{UPGRADE_TO_UPSTREAM=}')

github_api = ccc.github.github_api(github_cfg)
repository = github_api.repository(REPO_OWNER, REPO_NAME)

## hack / workaround: rebase to workaround concourse sometimes not refreshing git-resource
git_helper.rebase(
    commit_ish=REPO_BRANCH,
)

upgrade_pull_requests = list(
    github.pullrequest.iter_upgrade_pullrequests(
        repository=repository,
        state='all',
    ),
)

own_component = current_component()
logger.info(f'{own_component.name=} {own_component.version=}')

close_obsolete_pull_requests(
    upgrade_pull_requests=upgrade_pull_requests,
    reference_component=own_component,
)

upstream_update_policy = concourse.model.traits.update_component_deps.UpstreamUpdatePolicy(
    '${upstream_update_policy.value}'
)

<%
import concourse.steps
template = concourse.steps.step_template('component_descriptor')
ocm_repository_lookup = template.get_def('ocm_repository_lookup').render
%>
${ocm_repository_lookup(ocm_repository_mappings)}

oci_client = ccc.oci.oci_client()
ocm_lookup = cnudie.retrieve.create_default_component_descriptor_lookup(
    ocm_repository_lookup=ocm_repository_lookup,
    oci_client=oci_client,
    delivery_client=ccc.delivery.default_client_if_available(),
)
version_lookup = cnudie.retrieve.version_lookup(
    ocm_repository_lookup=ocm_repository_lookup,
    oci_client=oci_client,
)

% if pullrequest_body_suffix:
import textwrap
% endif

cfg_set = cfg_factory.cfg_set(ci.util.current_config_set_name())

if list(cfg_set._cfg_elements('delivery_endpoints')):
    delivery_endpoints_cfg = cfg_set.delivery_endpoints()
    delivery_dashboard_url = delivery_endpoints_cfg.dashboard_url()
else:
    delivery_dashboard_url = None

greatest_component_references = ocm.gardener.iter_greatest_component_references(
    references=ocm.gardener.iter_component_references(component=own_component),
)

existing_upgrade_vectors = [u.upgrade_vector for u in upgrade_pull_requests]

for component_reference in greatest_component_references:
    upgrade_vector = determine_upgrade_vector(
        component_reference=component_reference,
        upstream_component_name=upstream_component_name,
        upstream_update_policy=upstream_update_policy,
        upgrade_pull_requests=upgrade_pull_requests,
        ocm_lookup=ocm_lookup,
        version_lookup=version_lookup,
        ignore_prerelease_versions=${ignore_prerelease_versions},
    )

    if upgrade_vector is None:
        continue # did not find a suitable update-vector

    if upgrade_vector in existing_upgrade_vectors:
        logger.info(f'found existing pullrequest for {upgrade_vector=} - skipping')
        continue

    merge_policy = merge_policies.merge_policy_for(upgrade_vector.component_name)
    merge_method = merge_policies.merge_method_for(upgrade_vector.component_name)

    if not merge_policy:
        merge_policy = concourse.model.traits.update_component_deps.MergePolicy.MANUAL

    if not merge_method:
        merge_method = concourse.model.traits.update_component_deps.MergeMethod.MERGE

    pull_request = create_upgrade_pr(
        upgrade_vector=upgrade_vector,
        repository=repository,
        upgrade_script_path=os.path.join(REPO_ROOT, '${set_dependency_version_script_path}'),
        upgrade_script_relpath='${set_dependency_version_script_path}',
        git_helper=git_helper,
        branch=REPO_BRANCH,
        repo_dir=REPO_ROOT,
        github_cfg_name=github_cfg_name,
        component_descriptor_lookup=ocm_lookup,
        delivery_dashboard_url=delivery_dashboard_url,
        version_lookup=version_lookup,
        merge_policy=merge_policy,
        merge_method=merge_method,
        include_bom_diff=${include_bom_diff},
% if after_merge_callback:
        after_merge_callback='${after_merge_callback}',
% endif
% if pullrequest_body_suffix:
        pullrequest_body_suffix=textwrap.dedent('''${pullrequest_body_suffix}'''),
% endif
% if set_version_script_image:
        container_image='${set_version_script_image}',
% else:
        container_image = None,
% endif
    )
    # add pr to the list of known upgrade pull requests, so next iteration
    # on the generator returned by determine_upgrade_prs takes it into
    # consideration
    upgrade_pull_requests.append(pull_request)

for upgrade_pull_request in github.pullrequest.iter_obsolete_upgrade_pull_requests(
    list(upgrade_pull_requests)
):
    upgrade_pull_request.purge()
</%def>
