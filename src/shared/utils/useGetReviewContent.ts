import { reviewData } from "../constants/reviewData";

export const useGetReviewContent = (positive: boolean, reviewId: number) => {
  if (positive) {
    const result = reviewData.positive.filter((data) => data.id === reviewId);
    return result[0].content;
  } else {
    const result = reviewData.negative.filter((data) => data.id === reviewId);
    return result[0].content;
  }
};
