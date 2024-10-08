import * as S from './style';

export default function FooterNav() {
  return (
    <S.Container>
      <S.HomeIcon src="svg/gnb-home-icon.svg" alt="home-icon" />
      <S.ChatIcon src="svg/gnb-chat-icon.svg" alt="chat-icon" />
      <S.WriteIcon src="svg/gnb-write-icon.svg" alt="write-icon" />
      <S.MyPageIcon src="svg/gnb-profile-icon.svg" alt="profile-icon" />
    </S.Container>
  );
}
