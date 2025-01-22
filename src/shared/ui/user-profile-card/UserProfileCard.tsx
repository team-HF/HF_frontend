import ExerciseTag from "../exercise-tag/ExerciseTag";
import TierTag from "../tier-tag/TierTag";
import * as S from "./style";

const UserProfileCard = () => {
  return (
    <S.Container>
      <S.profileContainer>
        <S.ProfileImage src={"/svg/default-profile-icon.svg"} />
        <S.Box className="gap_8 column">
          <S.Box className="align-items-center gap_8">
            <S.Nickname>최대8자닉네임</S.Nickname>
            <TierTag fitnessLevel="BEGINNER" tier={1} />
          </S.Box>
          <S.TagContainer>
            <ExerciseTag tag={"소규모"}/>
            <ExerciseTag tag={"의욕만렙"}/>
            <ExerciseTag tag={"벌크업"}/>
            <ExerciseTag tag={"피트니스"}/>
          </S.TagContainer>
        </S.Box>
      </S.profileContainer>
      <S.Introduction>
        한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개  한 줄 소개 한 줄 소개 한 줄 소개 한 줄 소개 한 줄
        소개
      </S.Introduction>
      <S.MatchingCount>6회 매칭됨</S.MatchingCount>
    </S.Container>
  );
};

export default UserProfileCard;
