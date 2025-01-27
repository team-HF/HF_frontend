import * as S from './style';

interface HeaderProps {
  title: string;
  navigate?: () => void;
}

const Header = ({ title, navigate }: HeaderProps) => {
  return (
    <S.Container>
      <S.BackIcon src={'/svg/arrow-down.svg'} onClick={navigate} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;
