import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';
import { Review, ReviewSchema } from '../../../shared/schema/review';

const postReview = async (
  axiosInstance: AxiosInstance,
  matchingId: number,
  reviewerId: number,
  description: string,
  score: number,
  evaluationType: string
): Promise<Review> => {
  const response = await axiosInstance.post('/hf/reviews', {
    matchingId,
    reviewerId,
    description,
    score,
    evaluationType,
  });
  return ReviewSchema.parse(response.data);
};

export const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      matchingId,
      reviewerId,
      description,
      score,
      evaluationType,
    }: {
      matchingId: number;
      reviewerId: number;
      description: string;
      score: number;
      evaluationType: string;
    }) =>
      postReview(
        axiosInstance,
        matchingId,
        reviewerId,
        description,
        score,
        evaluationType
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
      console.log('리뷰 작성 성공:', data);
    },
    onError: (error) => {
      console.error('리뷰 작성 오류:', error.message);
    },
  });
};
