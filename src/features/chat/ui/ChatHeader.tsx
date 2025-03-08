import * as S from './chat-header-style.ts';
import { useGetMyData } from '../../../shared/api/useGetMyData.ts';
import LevelLabel from '../../../shared/ui/level-label/LevelLabel.tsx';
import { useNavigate } from 'react-router-dom';
import OnGoingMatchCard from '../../chat-lobby/ui/card/ui/OnGoingMatchCard.tsx';

export default function ChatHeader() {
  const navigate = useNavigate();
  const onBackCluck = () => {
    navigate(-1);
  };
  const { data: myData } = useGetMyData();
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.StyleBackButton
          src="/svg/left-arrow-icon.svg"
          alt="right-arrow-icon"
          onClick={onBackCluck}
        />
      </S.LeftWrapper>
      <S.CenterWrapper>
        <S.StyleName>{myData?.nickname}</S.StyleName>
        <LevelLabel />
      </S.CenterWrapper>
      <S.RightWrapper>
        <OnGoingMatchCard />
        <S.StyleMenu src="/svg/menu-dot-col-icon.svg" alt="menu-icon" />
      </S.RightWrapper>
    </S.Container>
  );
}
