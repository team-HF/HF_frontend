
import * as S from './style';
import TierTag from '../../../shared/ui/tier-tag/TierTag';
import ExerciseTag from '../../../shared/ui/exercise-tag/ExerciseTag';
import { useUserProfileStore } from '../../../shared/store/user-profile-store';
import { useContext, useEffect, useState } from 'react';
import { getSgisApiAccessToken } from '../../../shared/api/getSgisApiAccessToken';
import { getSgisLocation } from '../../../shared/api/getSgisLocation';
import { useGetTagName as getTagName } from '../../../shared/utils/useGetTagName';
import { useUserDetailStore } from '../../../pages/profile/store/user-detail-store';
import { usePostWish as postWish } from '../../../shared/api/usePostWish';
import { SocketContext } from '../../../app/providers/SocketProvider';
import { useRequestChat } from '../../../features/matching/api/useRequestNewChat';
import { useMyProfileStore } from '../../../shared/store/my-profile-store';
import { useDeleteWish } from '../../../shared/api/useDeleteWish';
import useSetRequireModal from '../../../shared/utils/useSetRequireModal';
import { useNavigate } from 'react-router-dom';

const UserDataDefault = () => {
  const { userProfile } = useUserProfileStore();
  const { userDetail } = useUserDetailStore();
  const { myProfile } = useMyProfileStore();
  const { requestChat } = useRequestChat();
  const setRequireModal = useSetRequireModal();

  const { mutate: deleteWish } = useDeleteWish();
  const [location, setLocation] = useState<string>('');
  const [wishState, setWishState] = useState<boolean>(false);

  const socket = useContext(SocketContext);
  const requesterId = socket?.memberId;
  const chatTargetId = userProfile?.memberId;
  const navigate = useNavigate();
  const exerciseStyle = [
    { id: "companionStyle", content: userProfile?.companionStyle },
    { id: "fitnessEagerness", content: userProfile?.fitnessEagerness },
    { id: "fitnessKind", content: userProfile?.fitnessKind },
    { id: "fitnessObjective", content: userProfile?.fitnessObjective },
  ];

  const createChat = () => {
    if (requesterId && chatTargetId) {
      requestChat({ requesterId, chatTargetId });
    } else {
      alert("채팅방 생성에 실패하였습니다.");
    }
  };

  const handleFriendRequest = () => {
    if (!userProfile?.memberId) {
      alert("상대방 정보가 없습니다.");
      return;
    } else if (!requesterId) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
      return;
    }
    createChat();
  };

  const clickWishBtn = () => {
    const handleWish = async () => {
      if (myProfile && userProfile) {
        const data = {
          wisherId: myProfile?.memberId,
          wishedId: userProfile?.memberId,
        };
        if (userProfile?.isWished) {
          deleteWish(data);
          setWishState(false);
        } else {
          await postWish(data);
          setWishState(true);
        }
      }
    };
    setRequireModal(handleWish);
  };

  const exerciseTags = exerciseStyle.map((style) => {
    if (style.content) {
      const tagName = getTagName(style);
      return <ExerciseTag key={`exercise_tag_${style.id}`} tag={tagName} />;
    }
  });

  useEffect(() => {
    (async () => {
      if (userProfile) {
        setWishState(userProfile.isWished);
        await getSgisApiAccessToken();
        const result = await getSgisLocation(
          `${userProfile?.cd1}${userProfile?.cd2}`,
          `${userProfile?.cd1}${userProfile?.cd2}${userProfile?.cd3}`
        );
        setLocation(result.full_addr);
      }
    })();
  }, [userProfile]);

  return (
    <S.Container>
      <S.Box className="padding_8 column gap_12">
        <S.Box className="gap_12">
          <S.UserImage
            src={
              userProfile?.profileImageUrl
                ? userProfile?.profileImageUrl
                : "/svg/default-profile-icon.svg"
            }
          />
          <S.Box className="column gap_8">
            <S.Box className="gap_8">
              <S.Text_1>{userProfile?.nickname}</S.Text_1>
              <TierTag
                fitnessLevel={userProfile?.fitnessLevel || "BEGINNER"}
                tier={userProfile?.tier.tier || 0}
              />
            </S.Box>
            <S.Box>
              <img src={"/svg/location-icon.svg"} />
              <S.Text_2>{location}</S.Text_2>
            </S.Box>
          </S.Box>
        </S.Box>
        <S.Box className="gap_4 exerciseTagList">{exerciseTags}</S.Box>
      </S.Box>
      <S.SummaryBox>
        <S.ItemBox>
          <S.Text_1>{userDetail?.matchingCount}회</S.Text_1>
          <S.Text_2>매칭수</S.Text_2>
        </S.ItemBox>
        <S.ItemBox className="middle">
          <S.Text_1>
            <S.Box className="gap_2">
              <img src="/svg/star-icon.svg" />
              <S.Text_1>{userDetail?.averageReviewScore}</S.Text_1>
              <S.Text_2>(0)</S.Text_2>
            </S.Box>
          </S.Text_1>
          <S.Text_2>별점</S.Text_2>
        </S.ItemBox>
        <S.ItemBox>
          <S.Text_1>{userDetail?.wishedCount}</S.Text_1>
          <S.Text_2>찜</S.Text_2>
        </S.ItemBox>
      </S.SummaryBox>
      <S.Box className="padding_8 gap_8">
        <S.SignUpBtn onClick={handleFriendRequest}>
          헬스 프렌즈 신청하기
        </S.SignUpBtn>
        <S.IconBtn onClick={clickWishBtn}>
          <img
            src={wishState ? "/svg/wish-true-icon.svg" : "/svg/heart-icon.svg"}
          />
        </S.IconBtn>
      </S.Box>
      <S.Box className="padding_24">
        <S.Introduction>{userProfile?.introduction}</S.Introduction>
      </S.Box>
    </S.Container>
  );
};

export default UserDataDefault;
