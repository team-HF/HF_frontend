import { useQuery } from '@tanstack/react-query';
import { useAxios } from '../utils/useAxios';
import { AxiosInstance } from 'axios';

const getMyInfo = async (axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.get('/oauth/token/me');
  return response.data;
};
export const useGetMyInfo = () => {
  const { axiosInstance } = useAxios();
  return useQuery({
    queryKey: ['myInfo'],
    queryFn: () => getMyInfo(axiosInstance),
  });
};
