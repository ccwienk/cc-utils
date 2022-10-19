Search.setIndex({"docnames": ["index", "pipeline", "pipeline_contract", "pipeline_job", "pipeline_step", "release_notes", "traits", "traits/component_descriptor", "traits/cronjob", "traits/draft_release", "traits/image_scan", "traits/notifications", "traits/options", "traits/publish", "traits/pullrequest", "traits/release", "traits/scan_sources", "traits/scheduling", "traits/slack", "traits/update_component_deps", "traits/version"], "filenames": ["index.rst", "pipeline.rst", "pipeline_contract.rst", "pipeline_job.rst", "pipeline_step.rst", "release_notes.rst", "traits.rst", "traits/component_descriptor.rst", "traits/cronjob.rst", "traits/draft_release.rst", "traits/image_scan.rst", "traits/notifications.rst", "traits/options.rst", "traits/publish.rst", "traits/pullrequest.rst", "traits/release.rst", "traits/scan_sources.rst", "traits/scheduling.rst", "traits/slack.rst", "traits/update_component_deps.rst", "traits/version.rst"], "titles": ["Gardener CI/CD Documentation", "Pipeline Definition", "CC-Utils - Build Pipeline Reference Manual", "Pipeline Job", "Pipeline Steps", "Release Notes Process", "Pipeline Definition Traits", "<em>component_descriptor</em> Trait", "<em>cronjob</em> Trait", "<em>draft_release</em> Trait", "<em>image_scan</em> Trait", "<em>notifications</em> Trait", "<em>options</em> Trait", "<em>publish</em> Trait", "<em>pull-request</em> Trait", "<em>release</em> Trait", "<em>scan_sources</em> Trait", "<em>scheduling</em> Trait", "<em>slack</em> Trait", "<em>update_component_deps</em> Trait", "<em>version</em> Trait"], "terms": {"thi": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "describ": [0, 4, 19], "how": [0, 7, 15, 20], "compon": [0, 1, 2, 3, 4, 5, 10, 11, 13, 15, 16, 20], "project": [0, 2, 13], "ar": [0, 1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19], "produc": [0, 4], "see": [0, 1, 4, 5, 7, 10, 11, 13, 15, 18], "link": 0, "more": [0, 11, 14, 19], "detail": [0, 13, 19], "itself": 0, "tightli": 0, "integr": 0, "github": [0, 1, 5, 7, 10, 14, 15, 16, 19], "In": [0, 2, 3, 5, 7, 10, 19], "particular": 0, "each": [0, 1, 2, 3, 4, 13, 19], "repres": 0, "exactli": [0, 4], "one": [0, 1, 4, 13, 15, 19], "repositori": [0, 1, 4, 5, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20], "releas": [0, 3, 6, 7, 9, 13, 18, 19], "As": [0, 2, 5, 13], "common": [0, 1], "practic": 0, "kubernet": [0, 3, 5], "eco": 0, "system": [0, 7, 10], "main": [0, 4, 8, 11, 13, 14, 15, 20], "deliver": 0, "contain": [0, 1, 2, 4, 5, 7, 10, 13, 14, 15, 16, 19], "imag": [0, 2, 4, 7, 10, 13, 15, 19], "thu": [0, 5, 13, 14], "also": [0, 4, 7, 13, 19], "encompass": [0, 2], "descriptor": [0, 3, 10, 13, 15, 16, 19], "which": [0, 2, 3, 4, 5, 7, 13, 14, 16], "declar": [0, 1, 2, 3, 4, 8, 9, 10, 13, 14, 15, 16, 18, 19], "refer": [0, 1, 3, 4, 7, 13, 15, 19], "ani": [0, 1, 3, 4, 7, 15, 19], "have": [0, 4, 5, 14], "been": [0, 3], "creat": [0, 4, 5, 7, 9, 13, 15, 16, 19], "given": [0, 4], "index": [0, 2, 6], "resid": [1, 3], "below": [1, 3, 5, 11], "an": [1, 2, 3, 4, 5, 7, 10, 11, 13, 15, 19, 20], "organis": 1, "own": [1, 7], "garden": [1, 2, 3, 5, 7, 13, 16, 19, 20], "team": [1, 16], "scan": [1, 10, 16], "file": [1, 4, 7, 10, 11, 13, 15, 16, 20], "within": [1, 2, 5, 19], "default": [1, 4, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20], "s": [], "sourc": [1, 2, 3, 4, 5, 13, 16, 20], "tree": [1, 3, 4, 13, 15, 19, 20], "If": [1, 3, 4, 5, 7, 10, 15, 16, 18], "valid": [1, 3, 7, 20], "found": [1, 10, 16], "all": [1, 2, 3, 4, 5, 10, 13, 16, 19], "gener": [1, 2, 5, 7, 10, 19], "concours": [1, 2, 3, 5], "build": [1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 20], "yaml": 1, "adher": 1, "defin": [1, 2, 3, 4, 7, 10, 11, 13, 16, 19], "document": [1, 4, 10, 19], "mai": [1, 2, 3, 4, 7, 11, 13, 19], "arbitrari": [1, 3, 4, 13], "amount": [1, 3, 4, 10, 12, 13], "top": 1, "level": 1, "The": [1, 3, 4, 5, 7, 8, 13, 15, 16, 19], "name": [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "being": [1, 10, 14], "share": 1, "global": 1, "namespac": 1, "so": [1, 5], "sure": 1, "re": 1, "us": [1, 2, 3, 4, 5, 7, 10, 11, 13, 15, 16, 18, 19, 20], "exist": [1, 2, 11], "alreadi": [1, 5], "anoth": [1, 4], "explan": [1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "user": [1, 3, 5, 12], "chosen": [1, 3, 15], "templat": [1, 5, 10, 13, 16], "futur": [1, 13], "extens": 1, "from": [1, 2, 4, 5, 10, 13, 15, 16, 19, 20], "should": [1, 3, 4, 5, 7, 13, 15, 16, 17, 19], "least": [1, 13, 15], "otherwis": [1, 10, 13], "would": [1, 5], "empti": 1, "displai": 1, "ui": 1, "try": 1, "keep": 1, "reason": [1, 14, 19], "short": 1, "20": 1, "char": 1, "refrain": 1, "whitespac": [1, 4], "non": [1, 3, 4, 15], "ascii": [1, 3], "charat": 1, "my_pipelin": 1, "two": [1, 4, 5, 13], "job_a": 1, "job_b": 1, "valu": [1, 5], "omit": 1, "same": [1, 4, 17], "appli": [1, 14, 16, 19], "step": [1, 2, 3, 5, 7, 10, 11, 14, 19], "inherit_m": 1, "another_pipelin": 1, "another_step": 1, "depend": [1, 3, 4, 5], "result": [1, 2, 4, 10, 11, 13, 14, 15, 16], "ha": [1, 3, 4, 5, 8, 11, 12, 14, 17, 18, 20], "By": [1, 4, 13, 19], "onli": [1, 3, 4, 5, 10, 11, 13, 14, 16, 19], "consid": [1, 5, 15], "option": [1, 3, 4, 5, 6, 10, 11, 13, 16], "cfg": [1, 7, 10, 11], "place": [1, 4, 7, 13], "special": 1, "ref": [1, 15], "meta": 1, "present": [1, 3, 7, 10, 15, 16], "differ": [1, 2, 3, 10, 13, 16], "semant": [1, 2, 15, 19], "when": [1, 4, 5, 11, 13, 16, 19], "search": 1, "For": [1, 3, 7, 14, 19], "match": [1, 10, 16, 19], "element": [1, 3, 5], "look": [1, 5], "up": [1, 7, 13], "iff": [1, 19], "head": [1, 3, 5, 8, 15, 20], "worktre": [1, 4, 15], "instanti": 1, "fragment": 1, "A": [1, 4, 5], "usag": [1, 3], "scenario": 1, "mandatori": 1, "root": [1, 3, 11, 15], "cfg_name": [1, 4, 16], "alphanumer": [1, 3], "list": [1, 3, 4, 7, 10, 11, 13, 14, 15, 16, 18, 19], "regular": [1, 19, 20], "expcess": 1, "requir": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "filter": 1, "master": [1, 3], "trait": [1, 2, 3, 4, 5], "nextvers": [1, 5], "bump_minor": [1, 5, 15], "bump_patch": [1, 15], "order": [2, 5], "run": [2, 3, 4, 8, 10, 13, 15], "continu": 2, "deliveri": 2, "workload": 2, "contribut": 2, "we": [2, 5], "oper": [2, 5, 9, 10, 15, 20], "central": 2, "servic": 2, "typic": 2, "execut": [2, 3, 4, 7, 8, 14, 17, 19, 20], "test": [2, 14, 16], "varieti": 2, "technolog": [], "well": [2, 4], "publish": [2, 4, 6, 15, 18], "our": [2, 5], "ci": [2, 3, 4, 7, 19], "cd": 2, "offer": [2, 7, 19], "around": 2, "some": [2, 4], "principl": 2, "nativ": 2, "environ": [2, 4, 11, 13, 15, 20], "customis": [2, 7, 11], "autom": 2, "without": [2, 4], "interact": 2, "self": 2, "chang": [2, 3, 4, 5, 8, 13, 14, 15, 19, 20], "standardis": 2, "howev": 2, "abstract": 2, "underli": [2, 13], "executor": 2, "instead": 2, "contract": 2, "through": [2, 4], "although": 2, "schedul": [2, 6], "done": [2, 3, 4, 7, 10, 13, 15, 19], "context": [2, 7], "set": [2, 3, 4, 7, 9, 10, 14, 16, 19, 20], "job": [2, 4, 5, 7, 8, 9, 10, 13, 14, 15, 17, 19, 20], "pipeline_definit": 2, "graph": [2, 4], "add": [2, 3, 4, 5, 7, 13, 15, 20], "certain": [2, 3, 10], "doe": [2, 3], "definit": [3, 5, 13], "repo": [3, 13, 19, 20], "configur": [3, 4, 5, 7, 10, 11, 13, 14, 15, 16, 18, 19], "It": [3, 4, 5, 19], "impli": [3, 20], "wa": [3, 5, 14], "read": [3, 20], "logic": [3, 4, 10, 13, 19], "branch": [3, 15, 20], "repo_path": 3, "determin": [3, 4], "path": [3, 4, 7, 11, 13, 15, 19, 20], "referenc": [3, 13], "follow": [3, 5, 7, 9, 10, 13, 15, 16, 19], "must": [3, 4, 11, 13, 16, 19, 20], "specifi": [3, 4, 5, 7, 10, 13, 15, 16, 19], "type": [3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "str": [3, 4, 7, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20], "affect": [3, 8], "none": [3, 4, 5, 7, 10, 13, 15, 16, 17, 18, 19, 20], "github_cfg": 3, "authent": [3, 4], "specif": [3, 11, 15, 19], "force_push": [3, 4], "fals": [3, 8, 10, 12, 13, 15, 16, 20], "bool": [3, 4, 7, 11, 12, 13, 15, 16, 17, 19, 20], "whether": [3, 4, 7, 11, 12, 13, 15, 16, 17, 19, 20], "forc": [3, 4, 13], "push": [3, 4, 5, 13, 15], "ought": 3, "exclud": [3, 16], "includ": [3, 5, 10, 13, 16], "dict": [3, 4, 7, 13, 16, 18, 19], "either": [3, 16], "ignor": [3, 7, 8, 10, 13, 19], "restrict": 3, "overwrit": [3, 7, 10, 16], "disable_ci_skip": 3, "disabl": [3, 14, 15], "commit": [3, 4, 11, 15, 20], "skip": [3, 16], "msg": 3, "work": [3, 4, 13, 15, 19], "e": [3, 4, 5, 7, 8, 10, 15, 16, 19], "g": [3, 4, 5, 7, 10, 15, 16, 19], "hostnam": 3, "do": [3, 5, 15], "protocol": 3, "prefer": [3, 5], "source_label": 3, "label": [3, 7, 10, 13], "correspond": [3, 5, 14], "base": [3, 5, 7, 13], "ssh": 3, "http": [3, 5], "updat": [3, 5, 8, 9, 10, 14, 15, 16, 19], "explicitli": [3, 13], "presenc": [3, 8], "cronjob": [3, 6], "pull": [3, 6, 19], "request": [3, 6, 19], "true": [3, 4, 7, 11, 13, 15, 16, 17, 19], "abov": [3, 5, 19], "allow": [3, 13], "evalu": [3, 4, 10], "effect": [3, 7, 9, 13, 15, 20], "possibl": [3, 5, 11], "case": [3, 4, 5, 10, 11, 13, 19], "thei": [3, 13], "touch": 3, "glob": 3, "syntax": [3, 10, 16], "support": [3, 5, 8, 13], "react": [3, 14], "other": [3, 4, 5, 13, 19], "invers": 3, "instanc": [3, 4], "host": [3, 20], "avail": [3, 4, 10, 11, 13, 15, 16, 19, 20], "store": 3, "privat": 3, "cc": [3, 7, 10, 13, 18, 19], "config": [3, 5, 10, 13, 16, 18], "github_com": 3, "github_wdf_sap_corp": 3, "com": [3, 5, 7, 11, 19], "foo": [3, 4, 11], "bar": [3, 11], "my_repo": [3, 4], "made": [3, 11, 13, 20], "my_repo_path": 3, "identifi": [3, 10, 19], "input": [3, 4, 7, 11], "construct": 3, "those": [3, 7, 10, 13, 14], "convert": [3, 4], "upper": [3, 4], "kebap": 3, "snake": 3, "word": 3, "occurr": 3, "dash": 3, "charact": [3, 4], "underscor": 3, "_": 3, "undefin": [3, 19], "forbidden": 3, "_path": [3, 4, 13], "rel": [3, 4, 11, 13, 15, 20], "_branch": 3, "_github_repo_owner_and_nam": 3, "github_path": 3, "alwai": [3, 11, 13], "main_repo_dir": 3, "env": [3, 4, 19], "its": 3, "therefor": [3, 19], "source_path": 3, "source_branch": 3, "source_github_repo_owner_and_nam": 3, "actual": 4, "payload": 4, "dure": [4, 7, 15, 20], "uniqu": 4, "per": 4, "step_nam": 4, "expect": [4, 7, 13], "insid": [4, 7, 15], "variabl": [4, 10, 11, 13, 15, 16, 20], "exit": [4, 15, 19], "code": [4, 5, 15, 19], "succeed": 4, "zero": [4, 15, 19], "interpret": 4, "success": 4, "whera": 4, "failur": [4, 15], "access": [4, 5, 12], "your": [4, 5, 16], "parallel": [4, 10, 17], "dependend": 4, "between": [4, 8], "toward": [4, 7], "trait_depend": [4, 10], "addit": 4, "argument": [4, 13, 19], "calcul": [4, 15, 20], "main_repo": [4, 19], "form": 4, "scalar": 4, "most": [4, 5, 11], "shell": [4, 7], "escap": 4, "verbatim": 4, "argv": 4, "notifications_cfg": 4, "notif": [4, 6], "polici": [4, 10, 11, 15, 16, 19], "registri": [4, 13], "retriev": 4, "map": 4, "input_nam": 4, "output_nam": 4, "upper_cas": 4, "expos": [4, 7, 14], "output": [4, 7, 13, 19], "output_dir": [4, 13], "writabl": 4, "directori": [4, 13], "via": [4, 15, 19, 20], "snake_cas": 4, "pass": [4, 13, 15], "subsequ": [4, 9, 14], "unchang": 4, "out": [4, 16], "var": [4, 19], "out_path": 4, "publish_to": 4, "dictionari": 4, "second": [4, 5], "current": [4, 10, 19, 20], "accept": [4, 10, 20], "them": [4, 14, 15], "pair": 4, "env_var_nam": 4, "python": 4, "express": [4, 19], "replic": 4, "pipeline_model": 4, "pipeline_descriptor": 4, "symbol": 4, "cache_path": 4, "experiment": 4, "attr": [4, 10, 16], "might": 4, "remov": [4, 10, 14, 16, 19, 20], "initi": 4, "pwd": 4, "cach": 4, "unprivileg": 4, "privilegemod": 4, "privileg": 4, "mode": [4, 10], "carefulli": 4, "potenti": 4, "untrust": 4, "timeout": 4, "go": [4, 8], "style": [4, 8], "time": [4, 8, 10, 13, 16], "interv": [4, 8], "1h30m": 4, "after": [4, 7, 14, 15, 19], "interrupt": 4, "fail": [4, 11], "retri": 4, "posit": [4, 10], "integ": 4, "maximum": [4, 10, 16], "until": 4, "count": 4, "on_abort": 4, "abort": [4, 10], "just": [4, 5], "like": [4, 5, 19], "themselv": 4, "cannot": [4, 5], "bewar": 4, "first_step": 4, "custom_execut": 4, "my_script": 4, "custom_imag": 4, "alpin": [4, 7], "3": [4, 7, 19], "6": [4, 7], "executable_with_arg": 4, "another_execut": 4, "arg": [4, 7], "build_and_expose_output": 4, "build_result_dir": 4, "publish_commit": 4, "finish": 4, "another_repo": 4, "caution": 4, "define_env_var": 4, "an_env_var": 4, "my_important_valu": 4, "assign": 4, "get": 4, "develop": [5, 15], "new": 5, "establish": 5, "gather": 5, "relev": 5, "inform": [5, 14], "sinc": 5, "last": [5, 11], "text": 5, "flag": 5, "introduc": 5, "target": [5, 10, 13, 16, 19], "group": [5, 10], "break": 5, "featur": 5, "bugfix": 5, "doc": 5, "target_group": 5, "exampl": [5, 16], "improv": 5, "my": 5, "first": [5, 11, 15], "write": [5, 11, 20], "block": 5, "delet": 5, "altogeth": 5, "section": 5, "noteworthi": 5, "notabl": [5, 13], "action": [5, 16], "now": 5, "know": 5, "tag": [5, 13, 15], "where": 5, "put": 5, "can": [5, 15, 20], "fetch": 5, "automat": [5, 7, 9, 19], "There": 5, "descript": [5, 16, 19], "messag": [5, 15], "propos": 5, "basi": 5, "here": 5, "dashboard": [5, 7], "147": 5, "appear": 5, "1": [5, 7, 19], "18": 5, "0": [5, 10, 16, 19], "still": 5, "open": 5, "merg": [5, 19], "even": 5, "you": 5, "edit": 5, "need": [5, 14], "make": [5, 7, 14], "onc": 5, "easier": 5, "commun": 5, "help": 5, "articl": 5, "remot": 5, "easili": 5, "anymor": 5, "veri": 5, "cautiou": 5, "usual": 5, "everi": [5, 8, 11], "view": 5, "enabl": [5, 16], "draft_releas": [5, 6], "inherit": 5, "version": [5, 6, 7, 9, 10, 13, 15, 16, 19], "upon": [5, 10, 11, 14, 16, 18, 19], "ideal": 5, "achiev": 5, "reus": 5, "mechan": 5, "explain": 5, "On": 5, "extract": 5, "start": [5, 14], "over": [5, 13], "again": [5, 14], "next": [5, 15], "default_channel": [5, 18], "ad": [5, 7, 14, 15], "channel_cfg": [5, 18], "shown": 5, "pipelin": [5, 20], "channel": [5, 18], "id": [5, 10, 16], "slack_cfg_nam": [5, 18], "known": 5, "channel_nam": [5, 18], "my_slack_channel_nam": 5, "example_slack_workspac": 5, "hold": [5, 13], "api": 5, "kei": 5, "bound": 5, "workspac": 5, "component_descriptor": [6, 9, 10, 15, 16, 19], "scan_sourc": 6, "image_scan": 6, "slack": [6, 15], "update_component_dep": 6, "inject": [7, 20], "resolve_depend": 7, "indic": [7, 13, 19], "unresolv": 7, "resolv": 7, "component_nam": [7, 10, 16, 19], "manual": [7, 15, 19], "callback_env": 7, "script": [7, 19], "validation_polici": 7, "me": 7, "obsolet": 7, "ctx_repository_base_url": 7, "base_url": 7, "v2": 7, "cicd": [7, 13], "landscap": 7, "ctx": 7, "ctx_repositori": 7, "snapshot_ctx_repositori": 7, "snapshot": 7, "i": [0, 1, 2, 3, 4, 5, 7, 8, 10, 13, 14, 15, 16, 19, 20], "cicd_landscap": 7, "component_label": 7, "stepinput": 7, "artifact": [7, 16], "asset": 7, "_default_": 7, "data": 7, "component_vers": [7, 10, 16], "built": [7, 13], "full": [7, 14], "bill": 7, "materi": 7, "mani": 7, "simpli": 7, "To": [7, 13, 14], "call": [7, 11, 15, 19], "layout": 7, "befor": [7, 12, 15], "callback": [7, 11, 19, 20], "termin": 7, "leav": 7, "final": [7, 9, 15, 19, 20], "upload": [7, 10], "base_definition_path": 7, "absolut": [7, 11, 15, 19], "component_descriptor_path": 7, "add_dependencies_cmd": 7, "cli": 7, "cmd": 7, "util": [7, 13, 19], "py": 7, "productutil": 7, "add_depend": 7, "h": [7, 8], "vpn": 7, "2": [7, 19], "4": 7, "5": 7, "assum": [7, 19], "image_refer": [7, 15, 19], "don": 7, "t": 7, "forget": 7, "cp": [7, 13], "5m": 8, "suffix": [8, 13, 20], "m": 8, "trigger": [8, 11, 14, 15, 16], "period": 8, "behaviour": [8, 13, 15], "42m": 8, "42": 8, "minut": 8, "preprocess": [9, 15], "process": [9, 10, 14, 16], "draft": 9, "note": [9, 15, 18], "collect": 9, "oci": [10, 15, 19], "resourc": [10, 13, 16], "tool": [10, 15, 19], "unless": 10, "mention": 10, "layer": 10, "mean": [10, 14], "later": [10, 19], "overwritten": 10, "content": [10, 13], "variant": [10, 13], "subject": 10, "exclude_component_nam": [], "exclude_image_nam": [], "exclude_image_refer": [], "include_component_nam": [], "include_image_nam": [], "include_image_refer": [], "email_recipi": [10, 16], "whom": [10, 11, 16], "about": [10, 14, 16], "issu": [10, 11, 16], "issue_polici": [10, 16], "issuepolici": [10, 16], "max_processing_time_dai": [10, 16], "maxprocessingtimesdai": [], "very_high_or_great": [10, 16], "30": [10, 16], "high": [10, 16], "medium": [10, 16], "90": [10, 16], "low": [10, 16], "120": [10, 16], "sla": [10, 16], "overwrite_github_issues_tgt_repository_url": [10, 16], "github_issu": [10, 16], "github_issue_templ": [10, 16], "custom": [10, 15, 16], "sub": [10, 16], "bodi": [10, 16], "python3": [10, 16, 19], "format": [10, 16], "summari": [10, 16], "etc": [10, 16], "tabl": [10, 16], "resource_nam": [10, 16], "resource_vers": [10, 16], "resource_typ": [10, 16], "greatest_cv": [10, 16], "report_url": [10, 16], "delivery_dashboard_url": [10, 16], "github_issue_labels_to_preserv": [10, 16], "regex": [10, 16], "never": [10, 11, 16], "ticket": [10, 16], "email": [10, 11, 16], "recipi": [10, 16], "critic": [10, 16], "perform": [10, 15, 16], "clamav": 10, "licens": 10, "licensecfg": 10, "check": [10, 19], "scanner": 10, "implement": [10, 13, 19], "bdba": 10, "exempt": [], "preced": [], "whose": [], "further": [], "nobodi": [10, 16], "component_own": [10, 16], "parallel_job": 10, "12": 10, "int": [10, 12, 16], "thread": 10, "cve_threshold": 10, "7": 10, "cve": 10, "threshold": [10, 16], "report": [10, 14], "notic": 10, "smaller": 10, "find": 10, "rescan": 10, "processingmod": 10, "reference_protecode_group_id": 10, "import": 10, "triag": 10, "protecode_group_id": 10, "ye": [10, 13, 15, 16, 18, 19], "technic": 10, "protecode_cfg_nam": 10, "cvssv3": 10, "cvssversion": 10, "cvss": 10, "sever": 10, "vulner": 10, "allowed_licens": 10, "toplevel": 10, "licenc": 10, "prohibited_licens": 10, "force_upload": 10, "cvssv2": 10, "clamav_cfg_nam": 10, "8": 10, "maxium": 10, "worker": 10, "saf_config_nam": 10, "saf": 10, "promin": 11, "send": 11, "error": [11, 15, 19], "mail": 11, "only_first": 11, "notificationtriggeringpolici": 11, "on_error_dir": 11, "committ": 11, "notificationrecipi": 11, "notifi": 11, "blow": 11, "cfg_callback": 11, "subprocess": [11, 15], "repo_root": 11, "notify_cfg_out": 11, "email_address": 11, "notifii": 11, "address": 11, "mycloud": 11, "buzz": 11, "component_diff_own": 11, "codeown": 11, "demo_break": 11, "bazz": 11, "component_descriptor_dir": 11, "build_logs_to_retain": 12, "1000": 12, "log": 12, "retain": 12, "rotat": 12, "occur": 12, "public_build_log": 12, "unauthent": 12, "docker": 13, "ocibuild": 13, "buildkit": 13, "platform": 13, "cross": 13, "buildx": 13, "multiarch": 13, "quemu": 13, "static": 13, "node": 13, "linux": 13, "kernel": 13, "architectur": 13, "386": 13, "amd64": 13, "aka": 13, "x86_64": 13, "arm": 13, "v6": 13, "v7": 13, "arm64": 13, "ppc64le": 13, "riscv64": 13, "s390x": 13, "receiv": [13, 19], "deriv": 13, "singl": 13, "multi": 13, "arch": 13, "_all_": 13, "null": 13, "tag_as_latest": 13, "latest": [13, 15, 19], "tag_templ": 13, "effective_vers": [13, 15, 20], "dockerfil": 13, "dir": 13, "multistag": 13, "resource_label": 13, "build_arg": 13, "kaniko": 13, "copi": 13, "consum": 13, "binary_path": 13, "prepar": 13, "guarante": 13, "_after_": 13, "both": 13, "except": [13, 16], "build_result": 13, "build_result_path": 13, "first_imag": 13, "eu": 13, "grc": 13, "io": 13, "second_imag": 13, "gcr": 13, "anotherdockerfil": 13, "replac": 14, "ok": 14, "review": 14, "statu": 14, "shall": 14, "pr": [14, 19], "turn": 14, "creation": [14, 15, 19], "post": [14, 15], "runtim": [14, 19], "pullrequest_url": 14, "url": 14, "wherea": 14, "pullrequest_id": 14, "number": 14, "secur": 14, "mitig": 14, "risk": 14, "malici": 14, "said": [14, 15], "begin": 14, "repeat": 14, "obviou": 14, "release_callback": 15, "repo_dir": [15, 19], "left": 15, "virtualis": 15, "rebase_before_releas": 15, "rebas": [15, 19], "against": 15, "next_version_callback": 15, "bump": 15, "immedi": [15, 19], "releasenotespolici": 15, "handl": [15, 20], "push_to_branch": 15, "releasecommitpublishingpolici": 15, "commit_message_prefix": 15, "prefix": 15, "next_version_commit_message_prefix": 15, "git_tag": 15, "ref_templ": 15, "placehold": 15, "release_on_github": 15, "bump_major": 15, "increment": 15, "major": 15, "minor": 15, "patch": 15, "noop": [15, 20], "No": 15, "tag_onli": 15, "dead": 15, "end": 15, "while": 15, "enforc": 15, "strongli": 15, "recommend": [15, 19], "persist": 15, "enrich": 15, "diff": 15, "lead": 15, "dev_cycle_callback": 15, "whole": 16, "One": [16, 18], "team_id": 16, "severity_threshold": 16, "include_path_regex": 16, "exclude_path_regex": 16, "float": [], "complianc": 16, "everyth": 16, "excplicitli": 16, "source_analysi": 16, "absent": 16, "enum": 16, "exclude_path": 16, "include_path": 16, "cloud": 16, "cnudi": 16, "sdo": [], "hint": [10, 16], "v1": 16, "path_config": 16, "src": 16, "pgk": 16, "pkg": 16, "hack": 16, "source_id": [], "tbd": 16, "suppress_parallel_execut": 17, "prevent": 17, "channelconfig": 18, "deprec": [18, 19], "my_slack_channel": 18, "scp_workspac": 18, "set_dependency_version_script": 19, "set_dependency_vers": 19, "separ": 19, "main_repositori": 19, "mount": 19, "mnt": 19, "upstream_component_nam": 19, "upstream": 19, "upstream_update_polici": 19, "strictly_follow": 19, "mergepolici": 19, "detect": 19, "after_merge_callback": 19, "invok": 19, "auto": 19, "ignore_prerelease_vers": 19, "prereleas": 19, "dev": 19, "abc": 19, "similar": 19, "auto_merg": 19, "sequenc": 19, "mergemethod": 19, "method": 19, "squash": 19, "newer": 19, "compar": 19, "ones": 19, "semver": [19, 20], "discov": 19, "great": 19, "outdat": 19, "convent": 19, "modifi": 19, "wai": 19, "along": 19, "pythonpath": 19, "dependency_typ": 19, "container_imag": 19, "web": 19, "dependency_nam": 19, "local_dependency_nam": 19, "dependency_vers": 19, "return": [19, 20], "equal": 19, "were": 19, "sane": 19, "unknown": 19, "signal": 19, "invalid": 19, "insan": 19, "clean": 19, "writeabl": 19, "intend": 19, "extend": 19, "reject": 19, "than": 19, "avoid": 19, "hash": 20, "versionfil": 20, "inject_effective_vers": 20, "written": 20, "versioninterfac": 20, "read_callback": 20, "stdout": 20, "write_callback": 20, "stdin": 20, "version_path": 20, "dso": 16, "info": 16, "exclude_component_vers": [], "include_component_vers": [], "take": [], "": [1, 3, 4, 7, 8, 10, 13, 15, 16, 19, 20], "technologi": 2, "matching_config": 10, "blocker": [10, 16], "rescor": 10, "mark": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"garden": 0, "ci": [0, 1], "cd": 0, "document": 0, "overview": 0, "indic": [0, 2, 6], "tabl": [0, 2, 6], "pipelin": [1, 2, 3, 4, 6], "definit": [1, 2, 6], "schema": 1, "attribut": [1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "exampl": [1, 3, 4, 7, 8, 11, 13, 14, 15, 17, 18], "pipeline_definit": 1, "inherit": 1, "base_definit": 1, "branch": 1, "specif": 1, "configur": 1, "schemat": 1, "hotfix": 1, "releas": [1, 5, 15], "job": [1, 3], "cc": 2, "util": 2, "build": [2, 13], "refer": 2, "manual": 2, "introduct": 2, "term": 2, "concept": 2, "github": 3, "repositori": 3, "main": 3, "addit": [3, 7], "preferred_protocol": 3, "enumer": [3, 4, 10, 11, 13, 15, 16, 19, 20], "valu": [3, 4, 10, 11, 13, 15, 16, 19, 20], "default": [3, 7, 11], "behaviour": [3, 19], "trigger": 3, "trigger_path": 3, "cfg_name": 3, "environ": [3, 7, 19], "variabl": [3, 7, 19], "from": 3, "step": [4, 13], "privilege_mod": 4, "note": [5, 19], "process": 5, "format": 5, "categori": 5, "titl": 5, "map": 5, "how": 5, "contribut": 5, "pull": [5, 14], "request": [5, 14], "commit": 5, "draft": 5, "transport": 5, "post": 5, "To": 5, "slack": [5, 18], "trait": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "component_descriptor": 7, "depend": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], "compon": [7, 19], "descriptor": 7, "declar": 7, "pass": [7, 19], "cronjob": 8, "draft_releas": 9, "image_scan": 10, "filter": 16, "filtercfg": 16, "notifi": [10, 16], "protecod": [10, 16], "protecodescancfg": 10, "processing_mod": 10, "cvss_version": 10, "clam_av": 10, "clamavscancfg": 10, "os_id": 10, "osidscan": 10, "notif": 11, "notificationcfgset": 11, "on_error": 11, "notificationcfg": 11, "triggering_polici": 11, "recipi": 11, "option": [12, 15], "publish": 13, "dockerimag": 13, "user": 13, "chosen": 13, "publishdockerimagedescriptor": 13, "oci": 13, "builder": 13, "input": 13, "implicitli": 13, "inject": 13, "polici": 14, "pullrequestpolici": 14, "label": [14, 16], "handl": 14, "nextvers": 15, "release_callback_image_refer": 15, "ociimagecfg": [15, 19], "release_notes_polici": 15, "release_commit_publishing_polici": 15, "callback": 15, "contract": [15, 19], "dev": 15, "cycl": 15, "scan_sourc": 16, "checkmarx": 16, "checkmarxcfg": 16, "whitesourc": [], "whitesourcecfg": [], "path": 16, "semant": 16, "support": 16, "schedul": 17, "update_component_dep": 19, "set_dependency_version_script_container_imag": 19, "merge_polici": 19, "mergepolicyconfig": 19, "merge_mod": 19, "merge_method": 19, "upgrad": 19, "extens": 19, "version": 20, "version_interfac": 20, "preprocess": 20}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})