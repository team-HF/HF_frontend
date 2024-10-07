import Hashtag from '../../../shared/ui/hashtag/Hashtag';
import MediumButton from '../../../shared/ui/medium-button/MediumButton';
import * as S from './profile-box.style';

export default function ProfileBox() {
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.ProfileIconContainer>
          <img src="/svg/default-profile-icon.svg" alt="default-profile" />
        </S.ProfileIconContainer>
        <S.ProfileTextContainer>
          <S.ProfileName>유저 1</S.ProfileName>
          <S.ProfileHashtagContainer>
            <Hashtag text="#소규모형" />
            <Hashtag text="#귀차니즘형" />
            <Hashtag text="#기능성피트니스위주" />
            <Hashtag text="#헬스헬스고강도헬스" />
          </S.ProfileHashtagContainer>
          <S.ProfileIntroduction>한줄 소개</S.ProfileIntroduction>
        </S.ProfileTextContainer>
      </S.ProfileContainer>
      <MediumButton
        text="임시 버튼"
        color="black"
        backgroundColor="gray"
        border="1px solid black"
      />
    </S.Container>
  );
}
