export type filterType = "dropdown" | "tag";

export const ContentsTypeData: { name: string; filterType: filterType }[] = [
  { name: "전체", filterType: "dropdown" },
  { name: "고민/사연", filterType: "dropdown" },
  { name: "인기글", filterType: "tag" },
];
