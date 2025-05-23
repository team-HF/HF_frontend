import * as S from './save-list.style';
import EmptyFavoriteListAndCouponList from './EmptyFavoriteListAndCouponList';
import { useGetMyWishList } from '../api/useGetMyWishList';
import { useNavigate } from 'react-router-dom';
import { useMyProfileStore } from '../../../shared/store/my-profile-store';
import { useDeleteWish } from '../../../shared/api/useDeleteWish';
import Loader from '../../../shared/ui/loader/Loader';

export default function SaveList() {
  const size = 20;
  const { myProfile } = useMyProfileStore();
  const navigate = useNavigate();

  const memberId = myProfile?.memberId;
  const {
    data: saveList,
    isLoading,
    error,
  } = useGetMyWishList(size, memberId ?? 0);
  const { mutate: deleteWish } = useDeleteWish();

  if (!myProfile || !memberId) {
    return <Loader />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>error</p>;
  }

  const onClickNavigateUserProfile = (wishedId: number) => {
    navigate(`/member/${wishedId}/profile`);
  };

  const onClickDeleteWish = async (wishedId: number) => {
    const data = {
      wisherId: memberId,
      wishedId: wishedId,
    };
    deleteWish(data);
  };

  const allItems = saveList?.pages.flatMap((page) => page.content) || [];
  return (
    <S.Container>
      {allItems.length > 0 ? (
        allItems.map((user) => (
          <S.ProfileWrapper key={user.wishedId}>
            <S.IconContainer>
              <S.ProfileIcon
                src={
                  user.imageUrl
                    ? user.imageUrl
                    : '/svg/default-profile-icon.svg'
                }
                alt="profile-icon"
                onClick={() => onClickNavigateUserProfile(user.wishedId)}
              />
              <S.HeartIcon
                src="/svg/profile-heart-icon.svg"
                alt="save-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickDeleteWish(user.wishedId);
                }}
              />
            </S.IconContainer>
            <S.TextWrapper>
              <S.ProfileText>{user.wishedNickname}</S.ProfileText>
            </S.TextWrapper>
          </S.ProfileWrapper>
        ))
      ) : (
        <EmptyFavoriteListAndCouponList category="즐겨찾기" />
      )}
    </S.Container>
  );
}
