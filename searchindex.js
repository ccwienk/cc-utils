Search.setIndex({"docnames": ["index", "pipeline", "pipeline_job", "pipeline_step", "release_notes", "traits", "traits/component_descriptor", "traits/cronjob", "traits/draft_release", "traits/image_scan", "traits/notifications", "traits/options", "traits/publish", "traits/pullrequest", "traits/release", "traits/scan_sources", "traits/scheduling", "traits/slack", "traits/update_component_deps", "traits/version"], "filenames": ["index.rst", "pipeline.rst", "pipeline_job.rst", "pipeline_step.rst", "release_notes.rst", "traits.rst", "traits/component_descriptor.rst", "traits/cronjob.rst", "traits/draft_release.rst", "traits/image_scan.rst", "traits/notifications.rst", "traits/options.rst", "traits/publish.rst", "traits/pullrequest.rst", "traits/release.rst", "traits/scan_sources.rst", "traits/scheduling.rst", "traits/slack.rst", "traits/update_component_deps.rst", "traits/version.rst"], "titles": ["CC-Utils - Build Pipeline Reference Manual", "Pipeline Definition", "Pipeline Job", "Pipeline Steps", "Release Notes Process", "Pipeline Definition Traits", "<em>component_descriptor</em> Trait", "<em>cronjob</em> Trait", "<em>draft_release</em> Trait", "<em>image_scan</em> Trait", "<em>notifications</em> Trait", "<em>options</em> Trait", "<em>publish</em> Trait", "<em>pull-request</em> Trait", "<em>release</em> Trait", "<em>scan_sources</em> Trait", "<em>scheduling</em> Trait", "<em>slack</em> Trait", "<em>update_component_deps</em> Trait", "<em>version</em> Trait"], "terms": {"thi": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "describ": [3, 18], "how": [6, 14, 19], "compon": [0, 1, 2, 3, 4, 9, 10, 12, 14, 15, 19], "project": [0, 6, 12], "ar": [0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 17, 18], "produc": [3, 6], "see": [1, 3, 4, 6, 9, 10, 12, 14, 17], "link": [], "more": [10, 13, 18], "detail": [12, 18], "itself": 2, "i": [0, 1, 2, 3, 4, 6, 7, 9, 12, 13, 14, 15, 18, 19], "tightli": [], "integr": [], "github": [1, 4, 6, 9, 13, 14, 15, 18], "In": [0, 2, 4, 6, 9, 18], "particular": [], "each": [0, 1, 2, 3, 6, 12, 18], "repres": [], "exactli": [3, 6], "one": [1, 3, 12, 14, 18], "repositori": [1, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15, 17, 18, 19], "releas": [2, 5, 6, 8, 12, 17, 18], "As": [0, 4, 12], "common": 1, "practic": [], "kubernet": [2, 4], "eco": [], "system": [6, 9], "main": [3, 7, 10, 12, 13, 14, 19], "deliver": [], "contain": [0, 1, 3, 4, 6, 9, 12, 13, 14, 15, 18], "imag": [0, 3, 9, 12, 14, 18], "thu": [4, 6, 12, 13], "also": [3, 6, 12, 18], "encompass": 0, "descriptor": [2, 9, 12, 14, 15, 18], "which": [0, 2, 3, 4, 6, 7, 9, 12, 13, 15], "declar": [0, 1, 2, 3, 7, 8, 9, 12, 13, 14, 15, 17, 18], "refer": [1, 2, 3, 6, 12, 14, 18], "ani": [1, 2, 3, 6, 14, 18], "have": [3, 4, 6, 9, 13], "been": [2, 6], "creat": [3, 4, 6, 8, 12, 14, 15, 18], "given": [2, 3], "index": [0, 5], "resid": [1, 2], "below": [1, 2, 4, 6, 10], "an": [0, 1, 2, 3, 4, 6, 9, 10, 12, 14, 18, 19], "organis": 1, "own": [1, 6], "garden": [0, 1, 2, 4, 6, 12, 15, 18, 19], "team": [1, 15], "scan": [1, 9, 15], "file": [1, 3, 6, 9, 10, 12, 14, 15, 19], "within": [0, 1, 4, 6, 12, 18], "default": [1, 3, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19], "": [1, 2, 3, 6, 7, 9, 12, 14, 15, 18, 19], "sourc": [0, 1, 2, 3, 4, 6, 12, 15, 19], "tree": [1, 2, 3, 6, 12, 14, 18, 19], "If": [1, 2, 3, 4, 6, 7, 9, 12, 14, 15, 17], "valid": [1, 2, 6, 19], "found": [1, 6, 9, 15], "all": [0, 1, 2, 3, 4, 6, 9, 12, 15, 18], "gener": [0, 1, 4, 6, 9, 18], "concours": [0, 1, 2, 4], "build": [1, 2, 3, 4, 6, 7, 9, 10, 11, 13, 14, 19], "yaml": 1, "adher": 1, "defin": [0, 1, 2, 3, 6, 9, 10, 12, 15, 18], "document": [1, 3, 6, 9, 12, 18], "mai": [0, 1, 2, 3, 6, 9, 10, 12, 18], "arbitrari": [1, 2, 3, 12], "amount": [1, 2, 3, 6, 9, 11, 12], "top": 1, "level": 1, "The": [1, 2, 3, 4, 6, 7, 9, 12, 14, 15, 18], "name": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "being": [1, 6, 9, 13], "share": [1, 6], "global": 1, "namespac": 1, "so": [1, 4], "sure": 1, "re": [1, 6], "us": [0, 1, 2, 3, 4, 7, 9, 10, 12, 14, 15, 17, 18, 19], "exist": [0, 1, 6, 10], "alreadi": [1, 4], "anoth": [1, 3], "explan": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "user": [1, 2, 4, 11], "chosen": [1, 2, 14], "templat": [1, 4, 6, 9, 12, 15], "futur": [1, 12], "extens": 1, "from": [0, 1, 3, 4, 6, 9, 12, 14, 15, 18, 19], "should": [1, 2, 3, 4, 6, 12, 14, 15, 16, 18], "least": [1, 12, 14], "otherwis": [1, 2, 9, 12], "would": [1, 4], "empti": 1, "displai": [1, 6], "ui": 1, "try": 1, "keep": [1, 6], "reason": [1, 6, 13, 18], "short": [1, 6], "20": 1, "char": 1, "refrain": 1, "whitespac": [1, 3], "non": [1, 2, 3, 14], "ascii": [1, 2], "charat": 1, "my_pipelin": 1, "two": [1, 3, 4, 7, 12], "job_a": 1, "job_b": 1, "valu": [1, 4, 6], "omit": [1, 2], "same": [1, 2, 3, 6, 16], "appli": [1, 13, 15, 18], "step": [0, 1, 2, 4, 6, 9, 10, 13, 18], "inherit_m": 1, "another_pipelin": 1, "another_step": 1, "depend": [1, 2, 3, 4], "result": [0, 1, 3, 6, 9, 10, 12, 13, 14, 15], "ha": [1, 2, 3, 4, 6, 7, 10, 11, 13, 16, 17, 19], "By": [1, 3, 12, 18], "onli": [1, 2, 3, 4, 6, 9, 10, 12, 13, 15, 18], "consid": [1, 4, 6, 14, 15], "option": [1, 2, 3, 4, 5, 6, 9, 10, 12, 15], "cfg": [1, 6, 9, 10], "place": [1, 3, 6, 12], "special": 1, "ref": [1, 6, 14], "meta": [1, 6], "present": [1, 2, 6, 9, 14, 15], "differ": [0, 1, 2, 6, 9, 12, 15], "semant": [0, 1, 14, 18], "when": [1, 3, 4, 6, 9, 10, 12, 15, 18], "search": 1, "For": [1, 2, 6, 13, 18], "match": [1, 6, 9, 15, 18], "element": [1, 2, 4], "look": [1, 4], "up": [1, 12], "iff": [1, 18], "head": [1, 2, 4, 6, 7, 14, 19], "worktre": [1, 3, 14], "instanti": 1, "fragment": 1, "A": [1, 3, 4, 6, 7], "usag": [1, 2], "scenario": 1, "mandatori": 1, "root": [1, 2, 6, 10, 12, 14], "cfg_name": [1, 3, 15], "alphanumer": [1, 2], "list": [1, 2, 3, 6, 7, 9, 10, 12, 13, 14, 15, 17, 18], "regular": [1, 6, 18, 19], "expcess": 1, "requir": [0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "filter": 1, "master": [1, 2], "trait": [0, 1, 2, 3, 4], "nextvers": [1, 4], "bump_minor": [1, 4, 14], "bump_patch": [1, 14], "order": [0, 4, 6, 12], "run": [0, 2, 3, 6, 7, 9, 12, 14], "continu": 0, "deliveri": 0, "workload": 0, "contribut": 0, "we": [0, 4], "oper": [0, 4, 8, 9, 14, 19], "central": 0, "servic": 0, "typic": [0, 6], "execut": [0, 2, 3, 6, 7, 12, 13, 16, 18, 19], "test": [0, 13, 15], "varieti": 0, "technologi": 0, "well": [0, 3], "publish": [0, 3, 5, 6, 14, 17], "our": [0, 4], "ci": [0, 2, 3, 6, 18], "cd": 0, "offer": [0, 6, 18], "around": 0, "some": [0, 3, 6], "principl": 0, "nativ": 0, "environ": [0, 3, 10, 12, 14, 19], "customis": [0, 6, 10], "autom": [0, 6, 9], "without": [0, 3], "interact": 0, "self": 0, "chang": [0, 2, 3, 4, 7, 12, 13, 14, 18, 19], "standardis": [0, 6], "howev": [0, 6], "abstract": 0, "underli": [0, 6, 12], "executor": 0, "instead": 0, "contract": 0, "through": [0, 3], "although": 0, "schedul": [0, 5], "done": [0, 2, 3, 6, 9, 12, 14, 18], "context": [0, 6], "set": [0, 2, 3, 7, 8, 9, 13, 15, 18, 19], "job": [0, 3, 4, 6, 7, 8, 9, 12, 13, 14, 16, 18, 19], "pipeline_definit": [0, 6], "graph": [0, 3], "add": [0, 2, 3, 4, 12, 14, 19], "certain": [0, 2, 9], "doe": [0, 2], "definit": [2, 4, 9, 12], "repo": [2, 6, 12, 18, 19], "configur": [2, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15, 17, 18], "It": [2, 3, 4, 6, 12, 18], "impli": [2, 19], "wa": [2, 4, 6, 13], "read": [2, 19], "logic": [2, 3, 9, 12, 18], "branch": [2, 6, 14, 19], "repo_path": 2, "determin": [2, 3, 6], "path": [2, 3, 6, 10, 12, 14, 18, 19], "referenc": [2, 6, 12], "follow": [2, 4, 6, 8, 9, 12, 14, 15, 18], "must": [2, 3, 10, 12, 15, 18, 19], "specifi": [2, 3, 4, 6, 7, 9, 12, 14, 15, 18], "type": [2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "str": [2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 17, 18, 19], "affect": [2, 7], "none": [2, 3, 4, 6, 7, 9, 12, 14, 15, 16, 17, 18, 19], "github_cfg": 2, "authent": [2, 3], "specif": [2, 6, 10, 14, 18], "force_push": [2, 3], "fals": [2, 3, 6, 7, 9, 11, 12, 14, 15, 19], "bool": [2, 3, 6, 10, 11, 12, 14, 15, 16, 18, 19], "whether": [2, 3, 6, 10, 11, 12, 14, 15, 16, 18, 19], "forc": [2, 3, 12], "push": [2, 3, 4, 12, 14], "ought": 2, "exclud": [2, 15], "includ": [2, 4, 6, 9, 12, 15], "dict": [2, 3, 6, 7, 12, 15, 17, 18], "either": [2, 6, 15], "ignor": [2, 6, 7, 9, 12, 18], "restrict": [2, 6], "overwrit": [2, 6, 9, 15], "disable_ci_skip": 2, "disabl": [2, 13, 14], "commit": [2, 3, 10, 14, 19], "skip": [2, 15], "msg": 2, "work": [2, 3, 6, 12, 14, 18], "e": [2, 3, 4, 6, 7, 9, 14, 15, 18], "g": [2, 3, 4, 6, 7, 9, 14, 15, 18], "hostnam": 2, "do": [2, 4, 14], "protocol": 2, "prefer": [2, 4, 6], "source_label": 2, "label": [2, 6, 9, 12], "correspond": [2, 4, 13], "base": [2, 4, 6, 12], "ssh": 2, "http": [2, 4], "updat": [2, 4, 6, 7, 8, 9, 13, 14, 15, 18], "explicitli": [2, 12], "presenc": [2, 7], "cronjob": [2, 5], "pull": [2, 5, 6, 18], "request": [2, 5, 6, 18], "true": [2, 3, 6, 10, 12, 14, 15, 16, 18], "abov": [2, 4, 6, 18], "allow": [2, 3, 9, 12], "evalu": [2, 3, 6, 9], "effect": [2, 6, 7, 8, 12, 14, 19], "possibl": [2, 4, 6, 10], "case": [2, 3, 4, 9, 10, 12, 18], "thei": [2, 6, 12], "touch": 2, "glob": 2, "syntax": [2, 9, 15], "support": [2, 4, 6, 7, 12], "react": [2, 13], "other": [2, 3, 4, 6, 12, 18], "invers": 2, "instanc": [2, 3], "host": [2, 19], "avail": [2, 3, 6, 9, 10, 12, 14, 15, 18, 19], "store": [2, 6], "privat": 2, "cc": [2, 6, 9, 12, 17, 18], "config": [2, 4, 9, 12, 15, 17], "github_com": 2, "github_wdf_sap_corp": 2, "com": [2, 4, 6, 10, 18], "foo": [2, 3, 10], "bar": [2, 10], "my_repo": [2, 3], "made": [2, 10, 12, 19], "my_repo_path": 2, "identifi": [2, 6, 9, 18], "input": [2, 3, 6, 10], "construct": 2, "those": [2, 6, 9, 12, 13], "convert": [2, 3, 6], "upper": [2, 3], "kebap": 2, "snake": 2, "word": 2, "occurr": 2, "dash": 2, "charact": [2, 3], "underscor": 2, "_": 2, "undefin": [2, 18], "forbidden": 2, "_path": [2, 3, 12], "rel": [2, 3, 7, 10, 12, 14, 19], "_branch": 2, "_github_repo_owner_and_nam": 2, "github_path": 2, "alwai": [2, 10, 12], "main_repo_dir": 2, "env": [2, 3, 18], "its": [2, 6], "therefor": [2, 6, 18], "source_path": 2, "source_branch": 2, "source_github_repo_owner_and_nam": 2, "actual": 3, "payload": 3, "dure": [3, 6, 14, 19], "uniqu": 3, "per": 3, "step_nam": 3, "expect": [3, 6, 12], "insid": [3, 6, 14], "variabl": [3, 9, 10, 12, 14, 15, 19], "exit": [3, 14, 18], "code": [3, 4, 14, 18], "succeed": 3, "zero": [3, 14, 18], "interpret": [3, 7, 12], "success": 3, "whera": 3, "failur": [3, 14], "access": [3, 4, 6, 11, 12], "your": [3, 4, 15], "parallel": [3, 9, 16], "dependend": 3, "between": [3, 7], "toward": [3, 6], "trait_depend": [3, 9], "addit": 3, "argument": [3, 12, 18], "calcul": [3, 14, 19], "main_repo": [3, 18], "form": [3, 7], "scalar": 3, "most": [3, 4, 6, 9, 10], "shell": [3, 6], "escap": 3, "verbatim": 3, "argv": 3, "notifications_cfg": 3, "notif": [3, 5], "polici": [3, 9, 10, 14, 15, 18], "registri": [3, 6, 12], "retriev": [3, 6], "map": [3, 6], "input_nam": 3, "output_nam": 3, "upper_cas": 3, "expos": [3, 6, 13], "output": [3, 6, 12, 18], "output_dir": [3, 12], "writabl": 3, "directori": [3, 12], "via": [3, 6, 14, 18, 19], "snake_cas": 3, "pass": [3, 12, 14], "subsequ": [3, 8, 13], "unchang": 3, "out": [3, 6, 15], "var": [3, 18], "out_path": 3, "publish_to": 3, "dictionari": 3, "second": [3, 4, 15], "current": [3, 6, 9, 18, 19], "accept": [3, 9, 19], "them": [3, 13, 14], "pair": 3, "env_var_nam": 3, "python": [3, 6], "express": [3, 18], "replic": 3, "pipeline_model": 3, "pipeline_descriptor": 3, "symbol": 3, "cache_path": 3, "experiment": 3, "attr": [3, 9, 15], "might": [3, 6], "remov": [3, 6, 9, 13, 15, 18, 19], "initi": 3, "pwd": 3, "cach": 3, "unprivileg": 3, "privilegemod": 3, "privileg": 3, "mode": [3, 9], "carefulli": 3, "potenti": 3, "untrust": 3, "timeout": [3, 9, 15], "go": [3, 7, 9], "style": [3, 7, 9], "time": [3, 6, 7, 9, 12, 15], "interv": [3, 7, 9], "1h30m": [3, 9], "after": [3, 6, 9, 13, 14, 18], "interrupt": [3, 9], "fail": [3, 9, 10, 15], "retri": 3, "posit": [3, 9], "integ": 3, "maximum": [3, 9, 15], "until": 3, "count": 3, "on_abort": 3, "abort": [3, 9], "just": [3, 4], "like": [3, 4, 6, 18], "themselv": 3, "cannot": [3, 4], "bewar": 3, "first_step": 3, "custom_execut": 3, "my_script": 3, "custom_imag": 3, "alpin": [3, 6], "3": [3, 6, 9, 18], "6": [3, 6], "executable_with_arg": 3, "another_execut": 3, "arg": [3, 6], "build_and_expose_output": 3, "build_result_dir": 3, "publish_commit": 3, "finish": 3, "another_repo": 3, "caution": 3, "define_env_var": 3, "an_env_var": 3, "my_important_valu": 3, "assign": 3, "get": 3, "develop": [4, 14], "new": 4, "establish": 4, "gather": 4, "relev": [4, 6], "inform": [4, 13], "sinc": 4, "last": [4, 10], "text": 4, "flag": [4, 6], "introduc": 4, "target": [4, 9, 12, 15, 18], "group": [4, 6, 9], "break": 4, "featur": [4, 6], "bugfix": 4, "doc": 4, "target_group": 4, "exampl": [4, 15], "improv": 4, "my": 4, "first": [4, 6, 10, 14], "write": [4, 10, 19], "block": 4, "delet": 4, "altogeth": 4, "section": 4, "noteworthi": 4, "notabl": [4, 12], "action": [4, 15], "now": 4, "know": 4, "tag": [4, 6, 12, 14], "where": 4, "put": 4, "can": [4, 6, 12, 14, 19], "fetch": [4, 6], "automat": [4, 6, 8, 18], "There": [4, 6], "descript": [4, 15, 18], "messag": [4, 14], "propos": 4, "basi": 4, "here": [4, 6], "dashboard": [4, 6], "147": 4, "appear": 4, "1": [4, 6, 9, 18], "18": [4, 7], "0": [4, 9, 15, 18], "still": 4, "open": 4, "merg": [4, 18], "even": 4, "you": [4, 6], "edit": 4, "need": [4, 6, 13], "make": [4, 6, 13], "onc": [4, 6], "easier": 4, "commun": 4, "help": [4, 6], "articl": 4, "remot": 4, "easili": 4, "anymor": 4, "veri": 4, "cautiou": 4, "usual": 4, "everi": [4, 7, 10], "view": 4, "enabl": [4, 15], "draft_releas": [4, 5], "inherit": 4, "version": [4, 5, 8, 9, 12, 14, 15, 18], "upon": [4, 9, 10, 13, 15, 17, 18], "ideal": 4, "achiev": 4, "reus": 4, "mechan": [4, 6], "explain": 4, "On": 4, "extract": 4, "start": [4, 6, 7, 13], "over": [4, 6, 12], "again": [4, 12, 13], "next": [4, 14], "default_channel": [4, 17], "ad": [4, 6, 13, 14], "channel_cfg": [4, 17], "shown": 4, "pipelin": [4, 6, 19], "channel": [4, 17], "id": [4, 9, 15], "slack_cfg_nam": [4, 17], "known": 4, "channel_nam": [4, 17], "my_slack_channel_nam": 4, "example_slack_workspac": 4, "hold": [4, 12], "api": 4, "kei": 4, "bound": 4, "workspac": 4, "component_descriptor": [5, 8, 9, 14, 15, 18], "scan_sourc": 5, "image_scan": 5, "slack": [5, 14], "update_component_dep": 5, "inject": [6, 19], "resolve_depend": 6, "indic": [6, 12, 18], "unresolv": 6, "resolv": 6, "component_nam": [6, 9, 15, 18], "manual": [6, 14, 18], "callback_env": 6, "script": [6, 18], "validation_polici": 6, "me": 6, "obsolet": 6, "ctx_repository_base_url": 6, "base_url": 6, "v2": 6, "cicd": [6, 12], "landscap": 6, "ctx": 6, "ctx_repositori": 6, "snapshot_ctx_repositori": 6, "snapshot": 6, "cicd_landscap": 6, "component_label": 6, "stepinput": 6, "artifact": [6, 15], "asset": 6, "_default_": 6, "data": 6, "component_vers": [6, 9, 15], "built": [6, 12], "full": [6, 13], "bill": 6, "materi": 6, "mani": 6, "simpli": 6, "To": [6, 12, 13], "call": [6, 10, 14, 18], "layout": 6, "befor": [6, 9, 11, 14], "callback": [6, 10, 12, 18, 19], "termin": 6, "leav": 6, "final": [6, 8, 14, 18, 19], "upload": [6, 9], "base_definition_path": 6, "absolut": [6, 10, 12, 14, 18], "component_descriptor_path": 6, "add_dependencies_cmd": 6, "cli": [], "cmd": 6, "util": [6, 12, 18], "py": 6, "productutil": 6, "add_depend": 6, "h": [6, 7], "vpn": 6, "2": [6, 9, 18], "4": [6, 9], "5": 6, "assum": [6, 18], "image_refer": [6, 14, 18], "don": 6, "t": 6, "forget": 6, "cp": [6, 12], "5m": 7, "suffix": [7, 12, 19], "m": 7, "trigger": [7, 9, 10, 13, 14, 15], "period": [6, 7], "behaviour": [7, 12, 14], "42m": 7, "42": 7, "minut": 7, "preprocess": [8, 12, 14], "process": [6, 8, 9, 13, 15], "draft": 8, "note": [8, 14, 17], "collect": [6, 8], "oci": [6, 9, 14, 18], "resourc": [6, 9, 12, 15], "tool": [6, 9, 14, 18], "unless": 9, "mention": 9, "layer": 9, "mean": [9, 13], "later": [9, 18], "overwritten": [6, 9], "content": [9, 12], "variant": [9, 12], "subject": [6, 9], "matching_config": 9, "email_recipi": [9, 15], "whom": [9, 10, 15], "about": [9, 13, 15], "issu": [9, 10, 15], "issue_polici": [9, 15], "max_processing_time_dai": [9, 15], "blocker": [9, 15], "high": [9, 15], "30": [7, 9, 15], "low": [9, 15], "120": [9, 15], "medium": [9, 15], "90": [9, 15], "very_high_or_great": [9, 15], "issuepolici": [9, 15], "sla": [9, 15], "overwrite_github_issues_tgt_repository_url": [9, 15], "github_issu": [9, 15], "github_issue_templ": [9, 15], "custom": [9, 14, 15], "sub": [9, 15], "bodi": [9, 15], "python3": [6, 9, 15, 18], "format": [6, 7, 9, 15], "summari": [9, 15], "etc": [9, 15], "tabl": [9, 15], "resource_nam": [9, 15], "resource_vers": [9, 15], "resource_typ": [9, 15], "greatest_cv": [9, 15], "report_url": [9, 15], "delivery_dashboard_url": [9, 15], "github_issue_labels_to_preserv": [9, 15], "regex": [9, 15], "never": [9, 10, 15], "ticket": [9, 15], "email": [9, 10, 15], "recipi": [9, 15], "critic": [9, 15], "perform": [6, 9, 14, 15], "clamav": 9, "licens": 9, "licensecfg": 9, "check": [9, 18], "scanner": 9, "implement": [6, 9, 12, 18], "bdba": 9, "nobodi": [9, 15], "component_own": [9, 15], "parallel_job": 9, "12": 9, "int": [9, 11, 15], "thread": 9, "cve_threshold": 9, "7": 9, "cve": 9, "threshold": [9, 15], "report": [9, 13], "notic": 9, "smaller": 9, "find": 9, "rescan": 9, "processingmod": 9, "reference_protecode_group_id": 9, "import": 9, "triag": 9, "protecode_group_id": 9, "ye": [9, 12, 14, 15, 17, 18], "technic": 9, "protecode_cfg_nam": 9, "cvssv3": 9, "cvssversion": 9, "cvss": 9, "sever": 9, "vulner": 9, "allowed_licens": 9, "toplevel": [9, 12], "licenc": 9, "prohibited_licens": 9, "force_upload": 9, "cvssv2": 9, "clamav_cfg_nam": 9, "8": 9, "maxium": [], "worker": 9, "saf_config_nam": 9, "saf": 9, "rescor": 9, "hint": [9, 15], "mark": 9, "promin": 10, "send": 10, "error": [10, 14, 18], "mail": 10, "only_first": 10, "notificationtriggeringpolici": 10, "on_error_dir": 10, "committ": 10, "notificationrecipi": 10, "notifi": 10, "blow": 10, "cfg_callback": 10, "subprocess": [10, 14], "repo_root": 10, "notify_cfg_out": 10, "email_address": 10, "notifii": 10, "address": 10, "mycloud": 10, "buzz": 10, "component_diff_own": 10, "codeown": 10, "demo_break": 10, "bazz": 10, "component_descriptor_dir": 10, "build_logs_to_retain": 11, "1000": 11, "log": 11, "retain": 11, "rotat": 11, "occur": 11, "public_build_log": 11, "unauthent": 11, "docker": 12, "ocibuild": 12, "buildkit": 12, "platform": 12, "cross": 12, "buildx": 12, "multiarch": 12, "quemu": 12, "static": 12, "node": 12, "linux": 12, "kernel": 12, "architectur": 12, "386": 12, "amd64": 12, "aka": 12, "x86_64": 12, "arm": 12, "v6": 12, "v7": 12, "arm64": 12, "ppc64le": 12, "riscv64": 12, "s390x": 12, "receiv": [12, 18], "deriv": 12, "singl": [7, 12], "multi": [6, 12], "arch": [6, 12], "_all_": 12, "null": 12, "tag_as_latest": 12, "latest": [12, 14, 18], "tag_templ": 12, "effective_vers": [12, 14, 19], "dockerfil": 12, "dir": 12, "multistag": 12, "resource_label": 12, "build_arg": 12, "kaniko": 12, "copi": 12, "consum": 12, "binary_path": 12, "prepar": 12, "guarante": 12, "_after_": 12, "both": [6, 12], "except": [12, 15], "build_result": 12, "build_result_path": 12, "first_imag": 12, "eu": [6, 12], "grc": 12, "io": [6, 12], "second_imag": 12, "gcr": [6, 12], "anotherdockerfil": 12, "replac": [6, 13], "ok": 13, "review": 13, "statu": 13, "shall": 13, "pr": [13, 18], "turn": 13, "creation": [13, 14, 18], "post": [13, 14], "runtim": [6, 13, 18], "pullrequest_url": 13, "url": [6, 13], "wherea": 13, "pullrequest_id": 13, "number": 13, "secur": 13, "mitig": 13, "risk": 13, "malici": 13, "said": [6, 13, 14], "begin": [7, 13], "repeat": 13, "obviou": 13, "release_callback": 14, "repo_dir": [14, 18], "left": 14, "virtualis": 14, "rebase_before_releas": 14, "rebas": [14, 18], "against": 14, "next_version_callback": 14, "bump": 14, "immedi": [6, 14, 18], "releasenotespolici": 14, "handl": [14, 19], "push_to_branch": 14, "releasecommitpublishingpolici": 14, "commit_message_prefix": 14, "prefix": [6, 14], "next_version_commit_message_prefix": 14, "git_tag": 14, "ref_templ": 14, "placehold": 14, "release_on_github": 14, "bump_major": 14, "increment": 14, "major": 14, "minor": [6, 14], "patch": 14, "noop": [14, 19], "No": 14, "tag_onli": 14, "dead": 14, "end": [7, 14], "while": 14, "enforc": 14, "strongli": 14, "recommend": [14, 18], "persist": 14, "enrich": 14, "diff": 14, "lead": [6, 14], "dev_cycle_callback": 14, "whole": 15, "One": [6, 15, 17], "team_id": 15, "severity_threshold": 15, "info": 15, "include_path_regex": 15, "exclude_path_regex": 15, "complianc": 15, "everyth": 15, "excplicitli": 15, "source_analysi": 15, "absent": [6, 15], "enum": 15, "exclude_path": 15, "include_path": 15, "cloud": 15, "cnudi": 15, "dso": 15, "v1": 15, "path_config": 15, "src": 15, "pgk": 15, "pkg": 15, "hack": 15, "tbd": 15, "suppress_parallel_execut": 16, "prevent": 16, "channelconfig": 17, "deprec": [17, 18], "my_slack_channel": 17, "scp_workspac": 17, "set_dependency_version_script": 18, "set_dependency_vers": 18, "separ": 18, "main_repositori": 18, "mount": 18, "mnt": 18, "upstream_component_nam": 18, "upstream": 18, "upstream_update_polici": 18, "strictly_follow": 18, "mergepolici": 18, "detect": 18, "after_merge_callback": 18, "invok": 18, "auto": 18, "ignore_prerelease_vers": 18, "prereleas": 18, "dev": 18, "abc": 18, "similar": [6, 18], "auto_merg": 18, "sequenc": 18, "mergemethod": 18, "method": 18, "squash": 18, "newer": 18, "compar": [9, 18], "ones": 18, "semver": [6, 18, 19], "discov": 18, "great": 18, "outdat": 18, "convent": [6, 18], "modifi": 18, "wai": [6, 18], "along": [6, 18], "pythonpath": 18, "dependency_typ": 18, "container_imag": 18, "web": 18, "dependency_nam": 18, "local_dependency_nam": 18, "dependency_vers": 18, "return": [18, 19], "equal": 18, "were": 18, "sane": 18, "unknown": 18, "signal": 18, "invalid": 18, "insan": 18, "clean": 18, "writeabl": 18, "intend": [6, 18], "extend": [6, 18], "reject": 18, "than": 18, "avoid": 18, "hash": 19, "versionfil": 19, "inject_effective_vers": 19, "written": 19, "versioninterfac": 19, "read_callback": 19, "stdout": 19, "write_callback": 19, "stdin": 19, "version_path": 19, "cve_rescoring_rul": 9, "rule": [6, 9], "honour": 9, "artefact": [6, 9], "categoris": 9, "escape_argv": 3, "expans": 3, "retention_polici": 6, "yet": [], "retent": [], "cleanup": [], "versionretentionpolici": 6, "foremostli": 6, "frequent": 6, "shortliv": 6, "inlin": 6, "pre": 6, "retentions_polici": 6, "latter": 6, "string": [6, 7], "dry_run": 6, "64": 6, "recurs": 6, "128": 6, "predefin": 6, "mostli": 6, "_permanent_": 6, "backup": 6, "care": 6, "multipl": 6, "stale": 6, "further": 6, "narrow": 6, "down": 6, "among": 6, "w": 6, "drop": 6, "exempt": 6, "acccord": 6, "relax": 6, "arithmet": 6, "smallest": 6, "greatest": 6, "progress": 6, "relat": 6, "local": [], "infrastructur": 6, "limit": [6, 7], "blob": 6, "implicitli": 6, "intern": 6, "scan_timeout": 15, "3600": 15, "exce": 15, "timezon": 7, "europ": 7, "berlin": 7, "dai": [7, 9], "weekdai": 7, "mondai": 7, "tuesdai": 7, "wednesdai": 7, "thursdai": 7, "fridai": 7, "saturdai": 7, "sundai": 7, "working_dai": 7, "mo": 7, "fr": 7, "timerang": 7, "rang": 7, "working_hour": 7, "08": 7, "00": 7, "subset": 12, "prebuild_hook": 12, "prior": 12, "build_dir": 12, "dockerd": 12, "excecut": 12, "hh": 7, "mm": 7, "09": 7, "45": 7, "13": 7, "12h": 9, "18h": 9, "2h": 9, "submodule_cfg_nam": 2, "provid": [2, 6], "submodul": 2, "git": [2, 6], "server": 2, "auth": 2, "cumbersom": 6, "conveni": 6, "command": [], "packag": 6, "instal": 6, "10": 6, "pip3": 6, "header": 6, "c": 6, "compil": 6, "toolchain": 6, "question": 6, "origin": 6, "tell": 6, "chdir": 6, "tri": 6, "guess": 6, "thing": 6, "onlin": 6, "heurist": 6, "close": 6, "necessarili": 6, "100": 6, "accur": 6, "cvesever": 9, "assess": 9, "ruleset": 9, "virus_db_max_age_dai": 9, "maxmimum": 9, "ag": 9, "viru": 9, "databas": 9, "2023": 6, "04": 6, "06": 6, "tailor": 6, "opinion": 6, "mind": 6, "successor": 6, "ocm": 6, "phase": 6, "littl": 6, "effort": 6, "part": 6, "instrument": 6, "helm": 6, "locat": 6, "entri": 6, "influenc": 6, "extern": 6, "someon": 6, "els": 6, "o": 6, "scheme": 6, "sourcerepositori": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"garden": [], "ci": 1, "cd": [], "document": [], "overview": [], "indic": [0, 5], "tabl": [0, 5], "pipelin": [0, 1, 2, 3, 5], "definit": [0, 1, 5], "schema": 1, "attribut": [1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "exampl": [1, 2, 3, 6, 7, 10, 12, 13, 14, 16, 17], "pipeline_definit": 1, "inherit": 1, "base_definit": 1, "branch": 1, "specif": 1, "configur": 1, "schemat": 1, "hotfix": 1, "releas": [1, 4, 14], "job": [1, 2], "cc": 0, "util": 0, "build": [0, 12], "refer": 0, "manual": 0, "introduct": 0, "term": 0, "concept": 0, "github": 2, "repositori": 2, "main": 2, "addit": [2, 6], "preferred_protocol": 2, "enumer": [2, 3, 9, 10, 12, 14, 15, 18, 19], "valu": [2, 3, 9, 10, 12, 14, 15, 18, 19], "default": [2, 6, 10], "behaviour": [2, 18], "trigger": 2, "trigger_path": 2, "cfg_name": 2, "environ": [2, 6, 18], "variabl": [2, 6, 18], "from": 2, "step": [3, 12], "privilege_mod": 3, "note": [4, 18], "process": 4, "format": 4, "categori": 4, "titl": 4, "map": 4, "how": 4, "contribut": 4, "pull": [4, 13], "request": [4, 13], "commit": 4, "draft": 4, "transport": 4, "post": 4, "To": 4, "slack": [4, 17], "trait": [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "component_descriptor": 6, "depend": [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], "compon": [6, 18], "descriptor": 6, "declar": 6, "pass": [6, 18], "cronjob": 7, "draft_releas": 8, "image_scan": 9, "notifi": [9, 15], "protecod": [9, 15], "protecodescancfg": 9, "processing_mod": 9, "cvss_version": 9, "clam_av": 9, "clamavscancfg": 9, "os_id": 9, "osidscan": 9, "notif": 10, "notificationcfgset": 10, "on_error": 10, "notificationcfg": 10, "triggering_polici": 10, "recipi": 10, "option": [11, 14], "publish": 12, "dockerimag": 12, "user": 12, "chosen": 12, "publishdockerimagedescriptor": 12, "oci": 12, "builder": 12, "input": 12, "implicitli": 12, "inject": 12, "polici": [6, 13], "pullrequestpolici": 13, "label": [13, 15], "handl": [6, 13], "nextvers": 14, "release_callback_image_refer": 14, "ociimagecfg": [14, 18], "release_notes_polici": 14, "release_commit_publishing_polici": 14, "callback": 14, "contract": [6, 14, 18], "dev": 14, "cycl": 14, "scan_sourc": 15, "filter": 15, "filtercfg": 15, "checkmarx": 15, "checkmarxcfg": 15, "path": 15, "semant": [6, 15], "support": 15, "schedul": 16, "update_component_dep": 18, "set_dependency_version_script_container_imag": 18, "merge_polici": 18, "mergepolicyconfig": 18, "merge_mod": 18, "merge_method": 18, "upgrad": 18, "extens": 18, "version": [6, 19], "version_interfac": 19, "preprocess": 19, "retent": 6, "aka": 6, "clean": 6, "up": 6, "old": 6, "cleanup": 6, "us": 6, "case": 6, "local": 6, "develop": 6, "cli": 6, "set": 6, "preliminari": 6, "render": 6, "auto_assess_max_sever": 9, "special": 6, "chart": 6, "imag": 6, "yaml": 6, "deprec": 6, "imagevector": 6, "add": 6, "command": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"CC-Utils - Build Pipeline Reference Manual": [[0, "cc-utils-build-pipeline-reference-manual"]], "Introduction": [[0, "introduction"]], "Terms, Definitions and Concepts": [[0, "terms-definitions-and-concepts"]], "Indices and tables": [[0, "indices-and-tables"]], "Pipeline Definition": [[1, "pipeline-definition"]], "Pipeline Definition Schema": [[1, "pipeline-definition-schema"]], "Attributes": [[1, "attributes"], [1, "id1"], [2, "attributes"], [2, "repository-config"], [3, "pipeline-step"], [6, "trait-component-descriptor"], [7, "trait-cronjob"], [8, "trait-draft-release"], [9, "trait-image-scan"], [10, "trait-notifications"], [11, "trait-options"], [12, "trait-publish"], [13, "trait-pullrequest"], [14, "trait-release"], [15, "trait-scan-sources"], [16, "trait-scheduling"], [17, "trait-slack"], [18, "trait-update-component-deps"], [19, "trait-version"]], "Example .ci/pipeline_definitions": [[1, "example-ci-pipeline-definitions"]], "Example - Inheritance / \u201cbase_definition\u201d": [[1, "example-inheritance-base-definition"]], "Branch-specific configuration": [[1, "branch-specific-configuration"]], "Example (schematic)": [[1, "example-schematic"]], "Example (hotfix-branch release jobs)": [[1, "example-hotfix-branch-release-jobs"]], "Pipeline Job": [[2, "pipeline-job"]], "(GitHub) Repositories": [[2, "github-repositories"]], "Main Repository": [[2, "main-repository"]], "Additional Repositories": [[2, "additional-repositories"]], "Repository Attributes": [[2, "repository-attributes"]], "preferred_protocol Enumeration Values": [[2, "repository-config"]], "Default behaviour for trigger attribute": [[2, "default-behaviour-for-trigger-attribute"]], "trigger_paths attribute": [[2, "trigger-paths-attribute"]], "cfg_names attribute": [[2, "cfg-names-attribute"]], "Examples": [[2, "examples"], [3, "examples"]], "Environment Variables": [[2, "environment-variables"]], "Environment Variables from repositories": [[2, "environment-variables-from-repositories"]], "Example": [[2, "example"], [6, "example"], [6, "id1"], [7, "example"], [10, "example"], [12, "example"], [13, "example"], [14, "example"], [14, "id2"], [16, "example"], [17, "example"]], "Pipeline Steps": [[3, "pipeline-steps"]], "privilege_mode Enumeration Values": [[3, "pipeline-step"]], "Release Notes Process": [[4, "release-notes-process"]], "Format": [[4, "format"]], "Category - Title Mapping": [[4, "category-title-mapping"]], "How to Contribute to Release Notes": [[4, "how-to-contribute-to-release-notes"]], "Pull Requests": [[4, "pull-requests"]], "Commits": [[4, "commits"]], "Draft Release": [[4, "draft-release"]], "Transporting Release Notes": [[4, "transporting-release-notes"]], "Posting Release Notes To Slack": [[4, "posting-release-notes-to-slack"]], "Pipeline Definition Traits": [[5, "pipeline-definition-traits"]], "Indices and Tables": [[5, "indices-and-tables"]], "component_descriptor Trait": [[6, "component-descriptor-trait"]], "Dependencies": [[6, "trait-component-descriptor"], [7, "trait-cronjob"], [8, "trait-draft-release"], [9, "trait-image-scan"], [10, "trait-notifications"], [11, "trait-options"], [12, "trait-publish"], [13, "trait-pullrequest"], [14, "trait-release"], [15, "trait-scan-sources"], [16, "trait-scheduling"], [17, "trait-slack"], [18, "trait-update-component-deps"], [19, "trait-version"]], "Default Component Descriptor": [[6, "default-component-descriptor"]], "Declaring Additional Dependencies": [[6, "declaring-additional-dependencies"]], "Environment Variables Passed to component_descriptor": [[6, "environment-variables-passed-to-component-descriptor"]], "Local Development and \u201ccomponent-cli\u201d": [[6, "local-development-and-component-cli"]], "Setting up Preliminaries": [[6, "setting-up-preliminaries"]], "Rendering Component-Descriptor": [[6, "rendering-component-descriptor"]], "Special-handling for \u201ccharts/images.yaml\u201d / deprecating component-cli": [[6, "special-handling-for-charts-images-yaml-deprecating-component-cli"]], "\u201cimagevector add\u201d command / charts/images.yaml contract": [[6, "imagevector-add-command-charts-images-yaml-contract"]], "Retention Policies (aka cleaning up old versions)": [[6, "retention-policies-aka-cleaning-up-old-versions"]], "Cleanup Semantics and Use-Case": [[6, "cleanup-semantics-and-use-case"]], "cronjob Trait": [[7, "cronjob-trait"]], "draft_release Trait": [[8, "draft-release-trait"]], "image_scan Trait": [[9, "image-scan-trait"]], "notify Enumeration Values": [[9, "trait-image-scan"], [15, "trait-scan-sources"]], "protecode (ProtecodeScanCfg) Attributes": [[9, "trait-image-scan"]], "protecode.auto_assess_max_severity Enumeration Values": [[9, "trait-image-scan"]], "protecode.processing_mode Enumeration Values": [[9, "trait-image-scan"]], "protecode.cvss_version Enumeration Values": [[9, "trait-image-scan"]], "clam_av (ClamAVScanCfg) Attributes": [[9, "trait-image-scan"]], "os_id (OsIdScan) Attributes": [[9, "trait-image-scan"]], "notifications Trait": [[10, "notifications-trait"]], "default (NotificationCfgSet) Attributes": [[10, "trait-notifications"]], "default.on_error (NotificationCfg) Attributes": [[10, "trait-notifications"]], "default.on_error.triggering_policy Enumeration Values": [[10, "trait-notifications"]], "default.on_error.recipients Enumeration Values": [[10, "trait-notifications"]], "options Trait": [[11, "options-trait"]], "publish Trait": [[12, "publish-trait"]], "dockerimages.<user-chosen> (PublishDockerImageDescriptor) Attributes": [[12, "trait-publish"]], "oci-builder Enumeration Values": [[12, "trait-publish"]], "inputs Attribute": [[12, "inputs-attribute"]], "implicitly injected build steps": [[12, "implicitly-injected-build-steps"]], "pull-request Trait": [[13, "pull-request-trait"]], "policies (PullRequestPolicies) Attributes": [[13, "trait-pullrequest"]], "Policies / Pull-Request Label Handling": [[13, "policies-pull-request-label-handling"]], "release Trait": [[14, "release-trait"]], "nextversion Enumeration Values": [[14, "trait-release"]], "release_callback_image_reference (OciImageCfg) Attributes": [[14, "trait-release"]], "release_notes_policy Enumeration Values": [[14, "trait-release"]], "release_commit_publishing_policy Enumeration Values": [[14, "trait-release"]], "Optional Release Callback": [[14, "optional-release-callback"]], "Contract": [[14, "contract"], [14, "id1"]], "Optional Dev Cycle Callback": [[14, "optional-dev-cycle-callback"]], "scan_sources Trait": [[15, "scan-sources-trait"]], "filters (FilterCfg) Attributes": [[15, "trait-scan-sources"]], "checkmarx (CheckmarxCfg) Attributes": [[15, "trait-scan-sources"]], "Path filtering semantics": [[15, "path-filtering-semantics"]], "Supported labels": [[15, "supported-labels"]], "checkmarx": [[15, "checkmarx"]], "protecode": [[15, "protecode"]], "scheduling Trait": [[16, "scheduling-trait"]], "slack Trait": [[17, "slack-trait"]], "update_component_deps Trait": [[18, "update-component-deps-trait"]], "set_dependency_version_script_container_image (OciImageCfg) Attributes": [[18, "trait-update-component-deps"]], "merge_policy Enumeration Values": [[18, "trait-update-component-deps"]], "merge_policies (MergePolicyConfig) Attributes": [[18, "trait-update-component-deps"]], "merge_policies.merge_mode Enumeration Values": [[18, "trait-update-component-deps"]], "merge_policies.merge_method Enumeration Values": [[18, "trait-update-component-deps"]], "Component Upgrade Contract": [[18, "component-upgrade-contract"]], "Passed Environment Variables": [[18, "passed-environment-variables"]], "Behavioural Contract": [[18, "behavioural-contract"]], "Extension Note": [[18, "extension-note"]], "version Trait": [[19, "version-trait"]], "version_interface Enumeration Values": [[19, "trait-version"]], "preprocess Attribute": [[19, "preprocess-attribute"]]}, "indexentries": {"modelelement": [[2, "repository-config"], [3, "pipeline-step"]], "repository config": [[2, "repository-config"]], "pipeline step": [[3, "pipeline-step"]], "trait": [[6, "trait-component-descriptor"], [7, "trait-cronjob"], [8, "trait-draft-release"], [9, "trait-image-scan"], [10, "trait-notifications"], [11, "trait-options"], [12, "trait-publish"], [13, "trait-pullrequest"], [14, "trait-release"], [15, "trait-scan-sources"], [16, "trait-scheduling"], [17, "trait-slack"], [18, "trait-update-component-deps"], [19, "trait-version"]], "component_descriptor": [[6, "trait-component-descriptor"]], "cronjob": [[7, "trait-cronjob"]], "draft_release": [[8, "trait-draft-release"]], "image_scan": [[9, "trait-image-scan"]], "notifications": [[10, "trait-notifications"]], "options": [[11, "trait-options"]], "publish": [[12, "trait-publish"]], "pullrequest": [[13, "trait-pullrequest"]], "release": [[14, "trait-release"]], "scan_sources": [[15, "trait-scan-sources"]], "scheduling": [[16, "trait-scheduling"]], "slack": [[17, "trait-slack"]], "update_component_deps": [[18, "trait-update-component-deps"]], "version": [[19, "trait-version"]]}})