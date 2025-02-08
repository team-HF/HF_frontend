import * as S from './style';
import { useNavigate } from 'react-router-dom';

type BackHeaderProps = {
  text: string;
  style?: React.CSSProperties;
};
export default function BackHeader({ text, style }: BackHeaderProps) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <S.Container style={style}>
      <S.ContentsWrapper>
        <S.IconWrapper
          src="/svg/left-arrow-icon.svg"
          alt="back-icon"
          onClick={handleBackClick}
        />
        <S.StyledTitle>{text}</S.StyledTitle>
      </S.ContentsWrapper>
    </S.Container>
  );
}
