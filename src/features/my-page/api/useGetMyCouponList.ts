import { useQuery } from '@tanstack/react-query';
import { AxiosInstance } from 'axios';
import {
  CouponResponse,
  CouponResponseSchema,
} from '../../../shared/schema/coupon';
import axiosInstance from '../../../shared/utils/useAxios';

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

  const filterTypeMap: Record<
    string,
    'ALL' | 'AVAILABLE' | 'USED' | 'EXPIRED'
  > = {
    전체: 'ALL',
    '사용 가능 쿠폰': 'AVAILABLE',
    '사용 완료 쿠폰': 'USED',
    '만료 쿠폰': 'EXPIRED',
  };

  return useQuery({
    queryKey: ['myCoupons', memberId, filterType],
    queryFn: () =>
      getMyCoupons(axiosInstance, memberId, filterTypeMap[filterType] || 'ALL'),
    staleTime: 5 * 60 * 1000,
    retry: 3,
  });
};
