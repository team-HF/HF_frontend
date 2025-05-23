import { AxiosInstance } from 'axios';
import {
  WishListResponse,
  WishListResponseSchema,
} from '../../../shared/schema/wish-list';
import axiosInstance from '../../../shared/utils/useAxios';
import { useInfiniteQuery } from '@tanstack/react-query';

const getMyWishList = async (
  axiosInstance: AxiosInstance,
  page: number,
  size: number,
  memberId: number
): Promise<WishListResponse> => {
  const response = await axiosInstance.get('/hf/wish/wishedList', {
    params: {
      page,
      size,
      memberId,
    },
  });
  return WishListResponseSchema.parse(response.data);
};

export const useGetMyWishList = (size: number, memberId: number) => {
  return useInfiniteQuery({
    queryKey: ['myWishList', memberId, size],
    queryFn: ({ pageParam = 1 }) =>
      getMyWishList(axiosInstance, pageParam, size, memberId),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (
        lastPage.page === undefined ||
        lastPage.totalPageCount === undefined
      ) {
        return null;
      }
      if (
        lastPage.page >= lastPage.totalPageCount ||
        lastPage.content.length === 0
      ) {
        return null;
      }
      return lastPage.page + 1;
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!memberId || memberId !== 0,
  });
};
