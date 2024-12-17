import * as S from './style';

type HeaderProps = {
  text: string;
};
export default function Header({ text }: HeaderProps) {
  return (
    <S.HeaderContainer>
      <S.HeaderText>{text}</S.HeaderText>
      <S.IconWrapper>
        <S.BellIcon
          src="/svg/notifications-icon.svg"
          alt="notifications-icon"
        ></S.BellIcon>
        <S.MenuIcon src="/svg/menu-icon.svg" alt="menu-icon"></S.MenuIcon>
      </S.IconWrapper>
    </S.HeaderContainer>
  );
}
