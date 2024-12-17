export type TCategory = "FREE" | "COUNSELING";
export type TFilter = "ADVANCED" | "BEGINNER";
export type TLabel = "WEEKEND" | "ADVANCED" | "BEGINNER";

export const categoryData: { name: string; id: TCategory }[] = [
  { name: "자유게시판", id: "FREE" },
  { name: "고민/사연", id: "COUNSELING" },
];
export const filterData: { name: string; id: TFilter }[] = [
  { name: "고수", id: "ADVANCED" },
  { name: "새싹", id: "BEGINNER" },
];
export const labelData: { name: string; id: TLabel }[] = [
  { name: "주간 TOP", id: "WEEKEND" },
  { name: "고수 인기글", id: "ADVANCED" },
  { name: "새싹 인기글", id: "BEGINNER" },
];
