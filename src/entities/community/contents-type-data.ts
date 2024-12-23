export type TCategoryId = "ALL" | "POPULAR" | "FREE_COMMUNITY" | "COUNSELING";
export type TCategoryData = {
  id: TCategoryId;
  name: string;
};

export const categoryData: TCategoryData[] = [
  { id: "ALL", name: "전체" },
  { id: "POPULAR", name: "인기글" },
  { id: "FREE_COMMUNITY", name: "자유게시판" },
  { id: "COUNSELING", name: "고민/사연" },
];
