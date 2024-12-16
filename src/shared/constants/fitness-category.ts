export const FITNESS_LEVEL_MAP = {
  BEGINNER: '새싹',
  ADVANCED: '고수',
} as const;

export const COMPANION_STYLE_MAP = {
  SMALL: '소규모형',
  GROUP: '그룹형',
} as const;

export const FITNESS_EAGERNESS_MAP = {
  EAGER: '의욕만렙형',
  LAZY: '귀차니즘형',
} as const;

export const FITNESS_OBJECTIVE_MAP = {
  BULK_UP: '벌크업',
  RUNNING: '러닝',
} as const;
export const FITNESS_KIND_MAP = {
  HIGH_STRESS: '고강도 운동 위주',
  FUNCTIONAL: '기능성 피트니스 위주',
} as const;

export type FitnessLevel = keyof typeof FITNESS_LEVEL_MAP;
export type CompanionStyle = keyof typeof COMPANION_STYLE_MAP;
export type FitnessEagerness = keyof typeof FITNESS_EAGERNESS_MAP;
export type FitnessObjective = keyof typeof FITNESS_OBJECTIVE_MAP;
export type FitnessKind = keyof typeof FITNESS_KIND_MAP;

export const getFitnessLevelText = (level: FitnessLevel) =>
  FITNESS_LEVEL_MAP[level];
export const getCompanionStyleText = (style: CompanionStyle) =>
  COMPANION_STYLE_MAP[style];
export const getFitnessEagernessText = (eagerness: FitnessEagerness) =>
  FITNESS_EAGERNESS_MAP[eagerness];
export const getFITNESS_OBJECTIVE_MAP = (objective: FitnessObjective) =>
  FITNESS_OBJECTIVE_MAP[objective];
export const getFitnessKindText = (kind: FitnessKind) => FITNESS_KIND_MAP[kind];
