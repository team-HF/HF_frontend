type TFilterId = "matching-up" | "score-up" | "like-up";

export const filterData: { name: string; id: TFilterId }[] = [
  { name: "매칭 많은순", id: "matching-up" },
  { name: "별점 높은순", id: "score-up" },
  { name: "찜하기 많은순", id: "like-up" },
];
