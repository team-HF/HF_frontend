import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../utils/useAxios';

interface PostWishProps {
  wisherId: number | undefined;
  wishedId: number | undefined;
}

const deleteWish = async ({ wisherId, wishedId }: PostWishProps) => {
  const data = { wisherId, wishedId };
  const response = await axiosInstance.delete('/hf/wish', { data });
  return response.data;
};

export const useDeleteWish = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myWishList'] });
    },
  });
