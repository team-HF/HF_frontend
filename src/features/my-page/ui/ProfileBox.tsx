import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import * as S from './profile-box.style';
import {
  COMPANION_STYLE_MAP,
  FITNESS_EAGERNESS_MAP,
  FITNESS_KIND_MAP,
  FITNESS_LEVEL_MAP,
  FITNESS_OBJECTIVE_MAP,
  getCompanionStyleText,
  getFitnessEagernessText,
  getFitnessKindText,
} from '../../../shared/constants/fitness-category';

type ProfileBoxProps = {
  myData?: {
    profileImageUrl?: string | null;
    nickname: string;
    introduction: string;
    tier: {
      fitnessLevel: string;
      tier: number;
    };
    companionStyle: keyof typeof COMPANION_STYLE_MAP;
    fitnessEagerness: keyof typeof FITNESS_EAGERNESS_MAP;
    fitnessKind: keyof typeof FITNESS_KIND_MAP;
    fitnessObjective: keyof typeof FITNESS_OBJECTIVE_MAP;
    fitnessLevel: keyof typeof FITNESS_LEVEL_MAP;
  };
};

export default function ProfileBox({ myData }: ProfileBoxProps) {
  if (!myData) {
    return (
      <S.Container>
        <S.ProfileContainer>
          <p>프로필 정보를 불러올 수 없습니다.</p>
        </S.ProfileContainer>
      </S.Container>
    );
  }

  const {
    profileImageUrl,
    nickname,
    tier,
    introduction,
    companionStyle,
    fitnessEagerness,
    fitnessKind,
    fitnessObjective,
    fitnessLevel,
  } = myData;

  const hashtags = [
    getCompanionStyleText(companionStyle as keyof typeof COMPANION_STYLE_MAP),
    getFitnessEagernessText(
      fitnessEagerness as keyof typeof FITNESS_EAGERNESS_MAP
    ),
    getFitnessKindText(fitnessKind as keyof typeof FITNESS_KIND_MAP),
    FITNESS_OBJECTIVE_MAP[
      fitnessObjective as keyof typeof FITNESS_OBJECTIVE_MAP
    ],
  ];

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileIconContainer>
          <S.ProfileIconWrapper
            src={profileImageUrl || '/svg/default-profile-icon.svg'}
            alt="user profile"
          />
        </S.ProfileIconContainer>
        <S.ProfileTextContainer>
          <S.NameWrapper>
            <S.ProfileName>{nickname}</S.ProfileName>
            <S.LevelWrapper $fitnessLevel={fitnessLevel}>
              {`${FITNESS_LEVEL_MAP[fitnessLevel]} LV.${tier.tier}`}
            </S.LevelWrapper>
          </S.NameWrapper>
          <S.ProfileHashtagContainer>
            {hashtags.map((tag, index) => (
              <Hashtag key={index} text={`#${tag}`} />
            ))}
          </S.ProfileHashtagContainer>
          <S.ProfileIntroduction>{introduction}</S.ProfileIntroduction>
        </S.ProfileTextContainer>
      </S.ProfileContainer>
    </S.Container>
  );
}
