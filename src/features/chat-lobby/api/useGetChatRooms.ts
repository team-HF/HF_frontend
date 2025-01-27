import { AxiosInstance } from 'axios';
import { ChatContent, MatchingStatus } from '../model/chat-lobby.types';
import { useAxios } from '../../../shared/utils/useAxios';
import { useQuery } from '@tanstack/react-query';

type ChatRoomProps = {
  participantId: number;
  searchCondition: MatchingStatus;
  page: number;
  pageSize: number;
};

const getChatRooms = async (
  { participantId, searchCondition, page, pageSize }: ChatRoomProps,
  axiosInstance: AxiosInstance
): Promise<ChatContent[]> => {
  const response = await axiosInstance.get(
    `/hf/members/${participantId}/chatrooms`,
    {
      params: {
        searchCondition,
        page,
        pageSize,
      },
    }
  );
  return response.data.content;
};

export const useGetChatRooms = ({
  participantId,
  searchCondition,
  page,
  pageSize,
}: ChatRoomProps) => {
  const { axiosInstance } = useAxios();

  return useQuery<ChatContent[], Error>({
    queryKey: [
      'chat-lobby-content',
      participantId,
      searchCondition,
      page,
      pageSize,
    ],
    queryFn: () =>
      getChatRooms(
        { participantId, searchCondition, page, pageSize },
        axiosInstance
      ),
    staleTime: 1000 * 60 * 5,
  });
};
