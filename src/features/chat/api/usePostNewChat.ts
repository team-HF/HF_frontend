import { AxiosInstance } from 'axios';
import { useAxios } from '../../../shared/utils/useAxios';
import { useMutation } from '@tanstack/react-query';
import { ChatRequestPayload } from '../model/chat.types';
const postNewChat = async (
  { requesterId, chatTargetId }: ChatRequestPayload,
  axiosInstance: AxiosInstance
) => {
  const response = await axiosInstance.post('/hf/app/chat/request', {
    requesterId,
    chatTargetId,
  });
  return response.data;
};

export const usePostNewChat = () => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationFn: (payload: ChatRequestPayload) =>
      postNewChat(payload, axiosInstance),
    onSuccess: (data) => {
      console.log('채팅 생성 성공:', data.chatRoomId);
    },
    onError: (error) => {
      console.error('채팅 생성 실패:', error.message);
    },
  });
};
