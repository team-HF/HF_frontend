import * as S from './empty-favorite-list-and-coupon-list.style';

export default function EmptyFavoriteListAndCouponList({
  category,
}: {
  category: string;
}) {
  return (
    <S.Container>
      {category === '즐겨찾기' ? (
        <S.Text>즐겨찾기 목록이 비어있습니다.</S.Text>
      ) : (
        <S.Text>선물함이 비어있습니다.</S.Text>
      )}
    </S.Container>
  );
}
