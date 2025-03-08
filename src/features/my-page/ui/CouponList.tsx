import { useState } from 'react';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import { useGetMyCoupons } from '../api/useGetMyCouponList';
import * as S from './coupon-list';
import { useQueryClient } from '@tanstack/react-query';
import EmptyFavoriteListAndCouponList from './EmptyFavoriteListAndCouponList';

export default function CouponList() {
  const { data: myData } = useGetMyData();
  const memberId = myData?.memberId ?? 0;
  const queryClient = useQueryClient();
  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [isOpenDropdownFilter, setIsOpenDropdownFilter] =
    useState<boolean>(false);

  const filterOptions = [
    '전체',
    '사용 가능 쿠폰',
    '사용 완료 쿠폰',
    '만료 쿠폰',
  ];

  const handleFilterChange = (option: string) => {
    setFilterStatus(option);
    setIsOpenDropdownFilter(false);
    queryClient.invalidateQueries({
      queryKey: ['myCoupons', memberId, option],
    });
  };

  const { data, isLoading, isError } = useGetMyCoupons(memberId, filterStatus);
  const coupons = data?.content ?? [];

  function formatPeriod(grantTime: string, expirationTime: string) {
    const format = (isoDate: string) => {
      const date = new Date(isoDate);
      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, '0');
      const dd = String(date.getDate()).padStart(2, '0');
      return `${yyyy}.${mm}.${dd}`;
    };

    return `${format(grantTime)}~${format(expirationTime)}`;
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <>
      <S.FilterContainer>
        <S.FilterButton
          onClick={() => setIsOpenDropdownFilter((prev) => !prev)}
        >
          {filterStatus}
          <S.DropdownArrowWrapper>
            <img src="/svg/under-arrow-icon.svg" alt="under-arrow-icon" />
          </S.DropdownArrowWrapper>
        </S.FilterButton>
        {isOpenDropdownFilter && (
          <S.Dropdown>
            {filterOptions.map((option, idx) => (
              <S.DropdownItem
                key={idx}
                onClick={() => handleFilterChange(option)}
              >
                {option}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.FilterContainer>

      {coupons.length > 0 ? (
        coupons.map((coupon) => (
          <S.Container key={coupon.couponId} type="all">
            <S.CouponTitleWrapper>
              <S.CouponTitle>{coupon.couponType} 리워드</S.CouponTitle>
            </S.CouponTitleWrapper>
            <S.CouponDescriptionWrapper>
              <S.CouponDescription>
                [1회 매칭권] 레벨업 혜택
              </S.CouponDescription>
            </S.CouponDescriptionWrapper>
            <S.CouponTypeWrapper>
              <S.CouponType>
                쿠폰 사용하기
                <img
                  src="/svg/right-arrow-icon.svg"
                  alt="right-arrow-icon"
                  style={{ marginLeft: '4px' }}
                />
              </S.CouponType>
            </S.CouponTypeWrapper>
            <S.CouponDateWrapper>
              <S.CouponDate>
                {formatPeriod(coupon.grantTime, coupon.expirationTime)}
              </S.CouponDate>
            </S.CouponDateWrapper>
          </S.Container>
        ))
      ) : (
        <EmptyFavoriteListAndCouponList category="선물함" />
      )}
    </>
  );
}
