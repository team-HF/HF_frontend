import Button from '../../../shared/ui/button/Button';
import Hashtag from '../../../shared/ui/Hashtag/Hashtag';
import * as s from './profile-box.style';

export default function ProfileBox() {
  return (
    <s.Container>
      <s.HeaderContainer>
        <s.HeaderText>프로필 입력</s.HeaderText>
        <s.BellIcon src="/svg/bell-icon.svg" alt="bell-icon"></s.BellIcon>
        <s.MenuIcon src="/svg/menu-icon.svg" alt="menu-icon"></s.MenuIcon>
      </s.HeaderContainer>
      <s.ProfileContainer>
        <s.ProfileIconContainer>
          <img src="/svg/default-profile-icon.svg" alt="default-profile" />
        </s.ProfileIconContainer>
        <s.ProfileTextContainer>
          <s.ProfileName>유저 1</s.ProfileName>
          <s.ProfileHashtagContainer>
            <Hashtag text="#소규모형" />
            <Hashtag text="#귀차니즘형" />
            <Hashtag text="#기능성피트니스위주" />
          </s.ProfileHashtagContainer>
          <s.ProfileIntroduction>한줄 자기소개</s.ProfileIntroduction>
        </s.ProfileTextContainer>
      </s.ProfileContainer>
      <Button
        width="20.125rem"
        height="2.8125rem"
        color="main"
        text="프로필설정"
      />
    </s.Container>
  );
}
