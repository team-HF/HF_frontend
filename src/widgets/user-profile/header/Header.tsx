import * as S from "./style";

interface HeaderProps {
  navigate: () => void;
  alarm: () => void;
}

const Header = ({ navigate, alarm }: HeaderProps) => {
  return (
    <S.Container>
      <S.Box_1>
        <S.IconBtn onClick={navigate}>
          <S.ArrowImg src={"/svg/arrow-down.svg"} />
        </S.IconBtn>
        <S.LogoBox>
          <S.Logo className="highlight">H</S.Logo>
          <S.Logo>ealth</S.Logo>
          <S.Logo className="highlight">F</S.Logo>
          <S.Logo>riend</S.Logo>
        </S.LogoBox>
      </S.Box_1>
      <S.IconBtn>
        <S.AlarmImg src={"/svg/alarm-icon.svg"} onClick={alarm} />
      </S.IconBtn>
    </S.Container>
  );
};

export default Header;
