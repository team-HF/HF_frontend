import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import * as S from './profile-box.style';
import { useGetMyData } from '../../../shared/api/useGetMyData';

export default function ProfileBox() {
  const { data: myData, isLoading, isError } = useGetMyData();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  const nickname = myData?.nickname || '닉네임 정보를 불러올 수 없습니다.';
  const introduction = myData?.introduction || '자기소개를 불러올 수 없습니다.';
  const hashtags = [
    myData?.companionStyle,
    myData?.fitnessEagerness,
    myData?.fitnessKind,
    myData?.fitnessObjective,
  ];

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
