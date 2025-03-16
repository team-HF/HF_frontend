import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';

const deleteWish = async (wishedId: number, axiosInstance: AxiosInstance) => {
  const response = await axiosInstance.delete(`/hf/wish/${wishedId}`);
  return response.data.content;
};

export const useDeleteWish = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (wishedId: number) => deleteWish(wishedId, axiosInstance),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myWishList'] });
    },
    onError: () => {
      alert('즐겨찾기 삭제에 실패하였습니다.');
    },
  });
};
