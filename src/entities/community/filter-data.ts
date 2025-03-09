export const categoryData: { name: string; id: TCategory }[] = [
  { name: "자유게시판", id: "FREE_COMMUNITY" },
  { name: "고민/사연", id: "COUNSELING" },
];
export const filterData: { name: string; id: TFilter }[] = [
  { name: "전체", id: "ALL" },
  { name: "고수", id: "ADVANCED" },
  { name: "새싹", id: "BEGINNER" },
];

export const CATEGORY_MAP = {
  ALL: "전체",
  FREE_COMMUNITY: "자유게시판",
  COUNSELING: "고민/사연",
} as const;

export const FILTER_MAP = {
  ALL: "전체",
  ADVANCED: "고수",
  BEGINNER: "새싹",
} as const;

export const LABEL_MAP = {
  WEEKEND: "주간 TOP",
  ADVANCED: "고수 인기글",
  BEGINNER: "새싹 인기글",
} as const;

export type TCategory = keyof typeof CATEGORY_MAP;
export type TFilter = keyof typeof FILTER_MAP;
export type TLabel = keyof typeof LABEL_MAP;

export const getCategoryText = (category: TCategory) => CATEGORY_MAP[category];
export const getFilterText = (filter: TFilter) => FILTER_MAP[filter];
export const getLabelText = (label: TLabel) => LABEL_MAP[label];
