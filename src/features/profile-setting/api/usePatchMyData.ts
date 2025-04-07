import { useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';
import {
  UpdateMyData,
  UpdateMyDataSchema,
} from '../../../shared/schema/my-data';

const patchMyData = async (
  axiosInstance: AxiosInstance,
  memberId: number,
  data: Partial<UpdateMyData>
): Promise<UpdateMyData & { profileImageUploadUrl?: string }> => {
  const response = await axiosInstance.patch(`/hf/members/${memberId}`, data);

  const profileImageUploadUrl = response.data.content?.profileImageUploadUrl;

  const parsedData = UpdateMyDataSchema.parse(
    response.data.content || response.data
  );

  return {
    ...parsedData,
    profileImageUploadUrl,
  };
};

export const usePatchMyData = (memberId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Partial<UpdateMyData>) => {
      return patchMyData(axiosInstance, memberId, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myData', memberId] });
      alert('회원 정보 수정이 완료되었습니다.');
    },
    onError: () => {
      alert('회원 정보 수정에 실패하였습니다.');
    },
  });
};
