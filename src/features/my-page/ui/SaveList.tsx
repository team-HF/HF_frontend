import * as S from './save-list.style';
import EmptyFavoriteListAndCouponList from './EmptyFavoriteListAndCouponList';
import { useGetMyWishList } from '../api/useGetMyWishList';
import { useGetMyData } from '../../../shared/api/useGetMyData';

export default function SaveList() {
  const size = 20;

  const {
    data: myData,
    isLoading: isLoadingMyData,
    error: errorMyData,
  } = useGetMyData();

  const memberId = myData?.memberId ?? 0;

  const { data: saveList, isLoading, error } = useGetMyWishList(size, memberId);

  if (isLoadingMyData) {
    return <p>loading...</p>;
  }
  if (errorMyData || !myData?.memberId) {
    return <p>error</p>;
  }

  if (isLoading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  const allItems = saveList?.pages.flatMap((page) => page.content) || [];
  console.log('All', allItems);
  //api에 문제가 있어서 추후 수정예정
  return (
    <S.Container>
      {allItems.length > 0 ? (
        allItems.map((user) => (
          <S.ProfileWrapper key={user.wishId}>
            <S.IconContainer>
              <S.ProfileIcon src={user.profileImage} alt="profile-icon" />
              <S.HeartIcon src="/svg/profile-heart-icon.svg" alt="save-icon" />
            </S.IconContainer>
            <S.TextWrapper>
              <S.ProfileText>{user.nickname}</S.ProfileText>
            </S.TextWrapper>
          </S.ProfileWrapper>
        ))
      ) : (
        <EmptyFavoriteListAndCouponList category="즐겨찾기" />
      )}
    </S.Container>
  );
}
