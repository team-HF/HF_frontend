import * as S from './style';
import { useNavigate } from 'react-router-dom';

type BackHeaderProps = {
  text: string;
};
export default function BackHeader({ text }: BackHeaderProps) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.ContentsWrapper>
        <S.IconWrapper
          src="svg/left-arrow-icon.svg"
          alt="back-icon"
          onClick={handleBackClick}
        />
        <S.StyledTitle>{text}</S.StyledTitle>
      </S.ContentsWrapper>
    </S.Container>
  );
}
