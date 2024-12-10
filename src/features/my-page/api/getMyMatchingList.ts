import { AxiosInstance } from 'axios';
import { useAxios } from '../../../shared/utils/useAxios';
import { useInfiniteQuery } from '@tanstack/react-query';
import {
  MatchingResponse,
  MatchingResponseSchema,
} from '../../../shared/schema/matching-response';

const getMyMatchingList = async (
  axiosInstance: AxiosInstance,
  memberId: number,
  {
    pageParam = 1,
    matchingStatusCondition = 'ALL',
  }: { pageParam?: number; matchingStatusCondition?: string }
): Promise<MatchingResponse> => {
  const response = await axiosInstance.get(
    `/hf/members/${memberId}/matchings`,
    {
      params: {
        page: pageParam,
        pageSize: 4,
        matchingFetchType: 'ALL',
        matchingStatusCondition,
      },
    }
  );
  return MatchingResponseSchema.parse(response.data);
};

export const useGetMyMatchingList = (
  memberId: number,
  filterStatus: string
) => {
  const { axiosInstance } = useAxios();

  const filterStatusMap: Record<string, string> = {
    전체: 'ALL',
    '매칭 진행 중': 'IN_PROGRESS',
    '매칭 종료': 'FINISHED',
    '매칭 중단': 'HALTED',
  };

  return useInfiniteQuery({
    queryKey: ['myMatchingList', memberId, filterStatus],
    queryFn: ({ pageParam = 1 }) =>
      getMyMatchingList(axiosInstance, memberId, {
        pageParam,
        matchingStatusCondition: filterStatusMap[filterStatus] || 'ALL',
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.content.page < lastPage.content.totalPageCount) {
        return lastPage.content.page + 1;
      }
      return undefined;
    },
    staleTime: 5 * 60 * 1000,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
