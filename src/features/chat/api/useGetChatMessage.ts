import { AxiosInstance } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useAxios } from '../../../shared/utils/useAxios';

type ChatRoomProps = {
  chatroomId: number;
  page?: number;
  pageSize?: number;
};

export const getChatMessages = async (
  axiosInstance: AxiosInstance,
  chatroomId: number,
  pageParam: number = 1,
  pageSize: number = 50
) => {
  const response = await axiosInstance.get(
    `/hf/chatrooms/${chatroomId}/chat-messages`,
    {
      params: {
        chatroomId,
        page: pageParam,
        pageSize,
      },
    }
  );
  return response.data.content;
};

export const useGetChatMessages = ({
  chatroomId,
  pageSize = 1000,
}: ChatRoomProps) => {
  const { axiosInstance } = useAxios();

  return useInfiniteQuery({
    queryKey: ['chatMessages', chatroomId, pageSize],
    queryFn: ({ pageParam = 1 }) =>
      getChatMessages(axiosInstance, chatroomId, pageParam, pageSize),
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
