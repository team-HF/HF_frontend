import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxios } from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';
import {
  UpdateMyData,
  UpdateMyDataSchema,
} from '../../../shared/schema/my-data';

const patchMyData = async (
  axiosInstance: AxiosInstance,
  memberId: number,
  data: Partial<UpdateMyData>
): Promise<UpdateMyData> => {
  const response = await axiosInstance.patch(`/hf/members/${memberId}`, data);
  return UpdateMyDataSchema.parse(response.data.content);
};

export const usePatchMyData = (memberId: number) => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<UpdateMyData>) =>
      patchMyData(axiosInstance, memberId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myData', memberId] });
      alert('회원 정보 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('회원 정보 수정에 실패하였습니다.');
    },
  });
};
