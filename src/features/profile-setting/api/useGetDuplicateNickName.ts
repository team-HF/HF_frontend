import { AxiosInstance } from 'axios';
import { useAxios } from '../../../shared/utils/useAxios';
import { useQuery } from '@tanstack/react-query';

const duplicateNickname = async (
  axiosInstance: AxiosInstance,
  nickname: string
) => {
  const response = await axiosInstance.get(
    '/hf/members/is-duplicate-nickname',
    {
      params: { nickname },
    }
  );
  return response.data;
};

export const useGetDuplicateNickname = (nickname: string | null) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['nickname', nickname],
    queryFn: () => {
      if (nickname === null) {
        throw new Error('닉네임이 없습니다.');
      }
      return duplicateNickname(axiosInstance, nickname);
    },
    enabled: !!nickname,
  });
};
