import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import * as S from './profile-box.style';

type ProfileBoxProps = {
  myData?: {
    nickname: string;
    introduction: string;
    companionStyle: string;
    fitnessEagerness: string;
    fitnessKind: string;
    fitnessObjective: string;
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
    nickname,
    introduction,
    companionStyle,
    fitnessEagerness,
    fitnessKind,
    fitnessObjective,
  } = myData;
  const hashtags = [
    companionStyle,
    fitnessEagerness,
    fitnessKind,
    fitnessObjective,
  ].filter(Boolean);

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileIconContainer>
          <S.ProfileIconWrapper
            src="/svg/default-profile-icon.svg"
            alt="default-profile"
          />
        </S.ProfileIconContainer>
        <S.ProfileTextContainer>
          <S.ProfileName>{nickname}</S.ProfileName>
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
