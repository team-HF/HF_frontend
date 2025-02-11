import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import {
  CouponResponse,
  CouponResponseSchema,
} from '../../../shared/schema/coupon';
import { useAxios } from '../../../shared/utils/useAxios';

const getMyCoupons = async (
  axiosInstance: AxiosInstance,
  memberId: number,
  fetchType: 'ALL' | 'AVAILABLE' | 'USED' | 'EXPIRED'
): Promise<CouponResponse> => {
  const response = await axiosInstance.get(`/hf/members/${memberId}/coupons`, {
    params: { fetchType },
  });
  return CouponResponseSchema.parse(response.data);
};

export const useGetMyCoupons = (memberId: number, filterType: string) => {
  const { axiosInstance } = useAxios();

  const filterTypeMap: Record<
    string,
    'ALL' | 'AVAILABLE' | 'USED' | 'EXPIRED'
  > = {
    전체: 'ALL',
    사용가능: 'AVAILABLE',
    사용완료: 'USED',
    만료: 'EXPIRED',
  };

  return useQuery({
    queryKey: ['myCoupons', memberId, filterType],
    queryFn: () =>
      getMyCoupons(axiosInstance, memberId, filterTypeMap[filterType] || 'ALL'),
    staleTime: 5 * 60 * 1000,
  });
};
