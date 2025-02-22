import { AxiosInstance } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAxios } from '../../../shared/utils/useAxios';

type ChatRoomProps = {
  chatroomId: number;
  page?: number;
  pageSize?: number;
  matchingStatusCondition?: string;
};

export const getChatMessages = async (
  axiosInstance: AxiosInstance,
  chatroomId: number,
  pageParam: number = 1,
  pageSize: number = 50,
  matchingStatusCondition: string = 'ALL'
) => {
  const response = await axiosInstance.get(
    `/hf/chatrooms/${chatroomId}/chat-messages`,
    {
      params: {
        chatroomId,
        page: pageParam,
        pageSize,
        MatchingStatus: matchingStatusCondition,
      },
    }
  );
  return response.data.content;
};

export const useGetChatMessages = ({
  chatroomId,
  pageSize = 1000,
  matchingStatusCondition = '전체',
}: ChatRoomProps) => {
  const { axiosInstance } = useAxios();

  const filterStatusMap: Record<string, string> = {
    전체: 'ALL',
    '매칭 진행 중': 'IN_PROGRESS',
    '매칭 종료': 'FINISHED',
    '매칭 중단': 'HALTED',
  };

  const status = filterStatusMap[matchingStatusCondition] || 'ALL';

  return useInfiniteQuery({
    queryKey: ['chatMessages', chatroomId, pageSize, status],
    queryFn: ({ pageParam = 1 }) =>
      getChatMessages(axiosInstance, chatroomId, pageParam, pageSize, status),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.totalPageCount) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    staleTime: 5 * 60 * 1000,
  });
};
