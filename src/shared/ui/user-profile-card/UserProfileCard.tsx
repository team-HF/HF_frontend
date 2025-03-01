import { useNavigate } from "react-router-dom";
import {
  getCompanionStyleText,
  getFITNESS_OBJECTIVE_MAP,
  getFitnessEagernessText,
  getFitnessKindText,
} from "../../constants/fitness-category";
import ExerciseTag from "../exercise-tag/ExerciseTag";
import TierTag from "../tier-tag/TierTag";
import * as S from "./style";
import { User } from "../../types/user";

const UserProfileCard = (profile: User) => {
  const navigate = useNavigate();
  return (
    <S.Container
      onClick={() => {
        navigate(`/member/${profile.memberId}/profile`);
      }}
    >
      <S.profileContainer>
        <S.ProfileImage src={"/svg/default-profile-icon.svg"} />
        <S.Box className="gap_8 column">
          <S.Box className="align-items-center gap_8">
            <S.Nickname>{profile.nickname}</S.Nickname>
            <TierTag fitnessLevel="BEGINNER" tier={1} />
          </S.Box>
          <S.TagContainer>
            <ExerciseTag tag={getCompanionStyleText(profile.companionStyle)} />
            <ExerciseTag
              tag={getFitnessEagernessText(profile.fitnessEagerness)}
            />
            <ExerciseTag
              tag={getFITNESS_OBJECTIVE_MAP(profile.fitnessObjective)}
            />
            <ExerciseTag tag={getFitnessKindText(profile.fitnessKind)} />
          </S.TagContainer>
        </S.Box>
      </S.profileContainer>
      <S.Introduction>{profile.introduction}</S.Introduction>
      <S.MatchingCount>{profile.matchedCount} 회 매칭됨</S.MatchingCount>
    </S.Container>
  );
};

export default UserProfileCard;
