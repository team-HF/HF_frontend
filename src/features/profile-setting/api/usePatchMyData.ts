import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAxios } from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';
import { MyData, MyDataSchema } from '../../../shared/schema/my-data';

const putMyData = async (
  axiosInstance: AxiosInstance,
  memberId: number,
  data: Partial<MyData>
): Promise<MyData> => {
  const response = await axiosInstance.patch(`/hf/members/${memberId}`, data);
  console.log(memberId);
  return MyDataSchema.parse(response.data.content);
};

export const usePutMyData = (memberId: number) => {
  const { axiosInstance } = useAxios();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<MyData>) =>
      putMyData(axiosInstance, memberId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myData', memberId] });
    },
    onError: () => {
      alert('프로필 업데이트에 실패하였습니다.');
    },
  });
};
