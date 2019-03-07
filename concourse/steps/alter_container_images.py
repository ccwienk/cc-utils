# Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed
# under the Apache Software License, v. 2 except as noted otherwise in the LICENSE file
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

import container.util
import util


def alter_image(
    src_ref: str,
    tgt_ref: str,
    filter_path_file: str,
):
    util.not_none(src_ref)
    util.not_none(tgt_ref)
    if src_ref == tgt_ref:
        raise ValueError(f'src and tgt must not be be equal: {src_ref} {tgt_ref}')

    with open(util.existing_file(filter_path_file)) as f:
        rm_paths = [
            p.strip() for p in f.readlines()
            if p.strip() and not p.strip().startswith('#')
        ]

    container.util.filter_image(
        source_ref=src_ref,
        target_ref=target_ref,
        remove_files=rm_paths,
    )
