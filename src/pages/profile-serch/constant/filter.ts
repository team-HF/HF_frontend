type TFilterId = "matchedCount" | "reviewScore" | "wishCount";

export const filterData: { name: string; id: TFilterId }[] = [
  { name: "매칭 많은순", id: "matchedCount" },
  { name: "별점 높은순", id: "reviewScore" },
  { name: "찜하기 많은순", id: "wishCount" },
];
