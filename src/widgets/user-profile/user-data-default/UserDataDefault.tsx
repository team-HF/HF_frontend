import * as S from "./style";
import TierTag from "../../../shared/ui/tier-tag/TierTag";
import ExerciseTag from "../../../shared/ui/exercise-tag/ExerciseTag";
import { useUserProfileStore } from "../../../shared/store/user-profile-store";

const UserDataDefault = () => {
  const { userProfile } = useUserProfileStore();

  const exerciseStyle = [
    userProfile?.companionStyle,
    userProfile?.fitnessEagerness,
    userProfile?.fitnessKind,
    userProfile?.fitnessObjective,
  ];

  const exerciseTags = exerciseStyle.map((style) => (
    <ExerciseTag key={`exercise_tag_${style}`} tag={style} />
  ));

  return (
    <S.Container>
      <S.Box className="padding_8 column gap_12">
        <S.Box className="gap_12">
          <S.UserImage
            src={
              userProfile?.profileImageUrl ? userProfile?.profileImageUrl : ""
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
              <S.Text_2>서울시 강동구</S.Text_2>
            </S.Box>
          </S.Box>
        </S.Box>
        <S.Box className="gap_4 exerciseTagList">{exerciseTags}</S.Box>
      </S.Box>
      <S.SummaryBox>
        <S.ItemBox>
          <S.Text_1>10회</S.Text_1>
          <S.Text_2>매칭수</S.Text_2>
        </S.ItemBox>
        <S.ItemBox className="middle">
          <S.Text_1>
            <S.Box className="gap_2">
              <img src="/svg/star-icon.svg" />
              <S.Text_1>4.3</S.Text_1>
              <S.Text_2>(10)</S.Text_2>
            </S.Box>
          </S.Text_1>
          <S.Text_2>별점</S.Text_2>
        </S.ItemBox>
        <S.ItemBox>
          <S.Text_1>75</S.Text_1>
          <S.Text_2>찜</S.Text_2>
        </S.ItemBox>
      </S.SummaryBox>
      <S.Box className="padding_8 gap_8">
        <S.SignUpBtn>헬스 프렌즈 신청하기</S.SignUpBtn>
        <S.IconBtn>
          <img src="/svg/heart-icon.svg" />
        </S.IconBtn>
      </S.Box>
      <S.Box className="padding_24">
        <S.Introduction>소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글소개글</S.Introduction>
      </S.Box>
    </S.Container>
  );
};

export default UserDataDefault;
