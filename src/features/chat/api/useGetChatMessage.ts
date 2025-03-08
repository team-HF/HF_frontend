import { AxiosInstance } from 'axios';
import { Content } from '../../../shared/types/chat.types';
import { useQuery } from '@tanstack/react-query';
import { useAxios } from '../../../shared/utils/useAxios';

type ChatRoomProps = {
  chatroomId: number;
  page?: number;
  pageSize?: number;
};
export const getChatMessages = async (
  axiosInstance: AxiosInstance,
  chatroomId: number,
  page: number = 1,
  pageSize: number = 50
): Promise<Content> => {
  const response = await axiosInstance.get(
    `/hf/chatrooms/${chatroomId}/chat-messages`,
    {
      params: {
        page,
        pageSize,
      },
    }
  );
  return response.data.content;
};
export const useGetChatMessages = ({
  chatroomId,
  page = 1,
  pageSize = 50,
}: ChatRoomProps) => {
  const { axiosInstance } = useAxios();

  return useQuery({
    queryKey: ['chatMessages', chatroomId, page, pageSize],
    queryFn: () => getChatMessages(axiosInstance, chatroomId, page, pageSize),
    staleTime: 5 * 60 * 1000,
  });
};
