import collections
import dataclasses
import enum
import typing

import dacite
import yaml

'''
utils/model classes for CVSS (https://www.first.org/cvss/user-guide)
'''


class AccessVector(enum.Enum):
    NETWORK = 'N'
    ADJACENT = 'A'
    LOCAL = 'L'
    PYSICAL = 'P'


class AttackComplexity(enum.Enum):
    LOW = 'L'
    HIGH = 'H'


class PrivilegesRequired(enum.Enum):
    NONE = 'N'
    LOW = 'L'
    HIGH = 'H'


class UserInteraction(enum.Enum):
    NONE = 'N'
    REQUIRED = 'R'


class Scope(enum.Enum):
    UNCHANGED = 'U'
    CHANGED = 'C'


class Confidentiality(enum.Enum):
    NONE = 'N'
    LOW = 'L'
    HIGH = 'H'


class Integrity(enum.Enum):
    NONE = 'N'
    LOW = 'L'
    HIGH = 'H'


class Availability(enum.Enum):
    NONE = 'N'
    LOW = 'L'
    HIGH = 'H'


@dataclasses.dataclass
class CVSSV3:
    access_vector: AccessVector
    attack_complexity: AttackComplexity
    user_interaction: UserInteraction
    privileges_required: PrivilegesRequired
    scope: Scope
    confidentiality: Confidentiality
    integrity: Integrity
    availability: Availability

    @staticmethod
    def attr_name_from_CVSS(name: str):
        if name == 'AV':
            return 'access_vector'
        elif name == 'AC':
            return 'attack_complexity'
        elif name == 'UI':
            return 'user_interaction'
        elif name == 'C':
            return 'confidentiality'
        elif name == 'I':
            return 'integrity'
        elif name == 'A':
            return 'availability'
        else:
            raise ValueError(name)

    @staticmethod
    def parse(cvss: str) -> 'CVSSV3':
        parts = {e.split(':')[0]: e.split(':')[1] for e in cvss.split('/')}
        return CVSSV3(
            access_vector=AccessVector(parts['AV']),
            attack_complexity=AttackComplexity(parts['AC']),
            privileges_required=PrivilegesRequired(parts['PR']),
            user_interaction=UserInteraction(parts['UI']),
            scope=Scope(parts['S']),
            confidentiality=Confidentiality(parts['C']),
            integrity=Integrity(parts['I']),
            availability=Availability(parts['A']),
        )


class NetworkExposure(enum.Enum):
    PRIVATE = 'private'
    PROTECTED = 'protected'
    PUBLIC = 'public'


class InteractingUserCategory(enum.Enum):
    GARDENER_OPERATOR = 'gardener-operator'
    END_USER = 'end-user'


class CVESeverity:
    NONE = 'none'
    LOW = 'low'
    HIGH = 'high'


@dataclasses.dataclass
class CveCategorisation:
    network_exposure: typing.Optional[NetworkExposure]
    authentication_enforced: typing.Optional[bool]
    user_interaction: typing.Optional[InteractingUserCategory]
    confidentiality_requirement: typing.Optional[CVESeverity]
    integrity_requirement: typing.Optional[CVESeverity]
    availability_requirement: typing.Optional[CVESeverity]
    comment: typing.Optional[str]


class Rescore(enum.Enum):
    REDUCE = 'reduce'
    NOT_EXPLOITABLE = 'not-exploitable'
    NO_CHANGE = 'no-change'


@dataclasses.dataclass
class RescoringRule:
    '''
    a CVE rescoring rule intended to be used when re-scoring a CVE (see `CVSSV3` type) for an
    artefact that has a `CveCategorisation`.

    category_value is expected of form <CveCategorisation-attrname>:<value> (see CveCategorisation
    for allowed values)
    cve_values is expected as a list of <CVSSV3-attrname>:<value> entries (see CVSSV3 for allowed
    values)
    rescore indicates the rescoring that should be done, if the rule matches.

    A rescoring rule matches iff the artefact's categorisation-value exactly matches the rule's
    category_value attr AND the CVE's values are included in the rule's `cve_values`.

    CVE-Attributes for which a rule does not specify any value are not considered for matching.
    '''
    category_value: str
    cve_values: list[str]
    rescore: Rescore

    @property
    def category_attr(self):
        return self.category_value.split(':')[0]

    @property
    def category_type(self):
        attr = self.category_attr
        annotations = typing.get_type_hints(CveCategorisation)

        if not attr in annotations:
            raise ValueError(f'invalid category-name: {attr=}')

        attr = annotations[attr]
        if typing.get_origin(attr) == typing.Union:
            args = [a for a in typing.get_args(attr) if not isinstance(None, a)]
            if len(args) != 1:
                # indicate programming error (CveCategorisation attrs must either be
                # simple types, or optionals.
                raise ValueError(f'only typing.Optional | Union with None is allowed {args=}')

            return args[0]

        return annotations[attr]

    @property
    def parsed_category_value(self):
        category_type = self.category_type
        value = self.category_value.split(':', 1)[-1]

        # special-case for bool
        if category_type == bool:
            parsed = yaml.safe_load(value)
            if not isinstance(parsed, bool):
                raise ValueError(f'failed to parse {value=} into boolean (using yaml.parsing)')
            return parsed

        return category_type(value)

    @property
    def parsed_cve_values(self) -> dict[str, set[object]]:
        attr_values = collections.defaultdict(set)

        for cve_value in self.cve_values:
            attr, value = cve_value.split(':', 1)
            attr = CVSSV3.attr_name_from_CVSS(attr)

            if not attr in (annotations := typing.get_type_hints(CVSSV3)):
                raise ValueError(f'{attr=} is not an allowed cve-attrname')

            attr_type = annotations[attr]
            attr_values[attr].add(attr_type(value))

        return attr_values

    def matches_cve(self, cve: CVSSV3) -> bool:
        '''
        returns a boolean indicating whether this rule matches the given CVE.

        Only CVE-Attributes that are specified by this rule w/ at least one value are checked.
        If more than one value for the same attribute is specified, matching will be assumed if
        the given CVE's attr-value is contained in the rule's values.
        '''
        cve_values = self.parsed_cve_values
        for attr, value in dataclasses.asdict(cve).items():
            if not attr in cve_values:
                continue

            if not value in cve_values[attr]:
                return False

        return True

    def matches_categorisation(self, categorisation: CveCategorisation) -> bool:
        attr = self.category_attr
        value = self.parsed_category_value

        return value == getattr(categorisation, attr)


def rescoring_rules_from_dicts(rules: list[dict]) -> typing.Generator[RescoringRule, None, None]:
    '''
    deserialises rescoring rules. Each dict is expected to have the following form:

    category_value: <CveCategorisation-attr>:<value>
    rules:
      - cve_values:
        - <CVSSV3-attr>: <value>
        rescore: <Rescore>
    '''
    for rule in rules:
        category_value = rule['category_value']

        for subrule in rule['rules']:
            cve_values = subrule['cve_values']
            rescore = subrule['rescore']

            yield dacite.from_dict(
                data_class=RescoringRule,
                data={
                    'category_value': category_value,
                    'cve_values': cve_values,
                    'rescore': rescore,
                },
                config=dacite.Config(
                    cast=(enum.Enum, tuple),
                )
            )