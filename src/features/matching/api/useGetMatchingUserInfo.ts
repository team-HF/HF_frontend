import { AxiosInstance } from 'axios';
import axiosInstance from '../../../shared/utils/useAxios';
import { useQuery } from '@tanstack/react-query';

const getMatchingUserInfo = async (
  axiosInstance: AxiosInstance,
  memberId: number
) => {
  const response = await axiosInstance(`/hf/members/${memberId}`);
  return response.data.content;
};

export const useGetMatchingUserInfo = (memberId: number) => {
  return useQuery({
    queryKey: ['matchingUserInfo', memberId],
    queryFn: () => getMatchingUserInfo(axiosInstance, memberId),
    enabled: !!memberId,
  });
};
