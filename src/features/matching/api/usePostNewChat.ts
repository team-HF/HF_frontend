import { AxiosInstance } from 'axios';
import { useAxios } from '../../../shared/utils/useAxios';
import { useMutation } from '@tanstack/react-query';
import { ChatRequestPayload } from '../../chat/model/chat.types';

interface ChatResponse {
  newChatroomId: number;
}
const postNewChat = async (
  { requesterId, chatTargetId }: ChatRequestPayload,
  axiosInstance: AxiosInstance
): Promise<ChatResponse> => {
  const response = await axiosInstance.post('/hf/app/chat/request', {
    requesterId,
    chatTargetId,
  });
  return response.data;
};

export const usePostNewChat = (
  onSuccessCallback?: (data: ChatResponse) => void
) => {
  const { axiosInstance } = useAxios();

  return useMutation({
    mutationKey: ['postNewChat'],
    mutationFn: (payload: ChatRequestPayload) =>
      postNewChat(payload, axiosInstance),
    onSuccess: (data) => {
      console.log('채팅 생성 성공:', data.newChatroomId);
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
    onError: (error) => {
      console.error('채팅 생성 실패:', error.message);
    },
  });
};
