export type TCategory = "자유게시판" | "고민/사연";
export type TFilter = "고수" | "새싹";
export type TLabel = "주간 TOP" | "고수 인기글" | "새싹 인기글";

export const categoryData: { name: TCategory }[] = [
  { name: "자유게시판" },
  { name: "고민/사연" },
];
export const filterData: { name: TFilter }[] = [
  { name: "고수" },
  { name: "새싹" },
];
export const labelData: { name: TLabel }[] = [
  { name: "주간 TOP" },
  { name: "고수 인기글" },
  { name: "새싹 인기글" },
];
