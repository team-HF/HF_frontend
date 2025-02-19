import * as S from './chat-header-style.ts';
import { useGetMyData } from '../../../shared/api/useGetMyData.ts';
import LevelLabel from '../../../shared/ui/level-label/LevelLabel.tsx';
import { useNavigate } from 'react-router-dom';
import RequestMatchingLabel from './RequestMatchingLabel.tsx';
import { useState } from 'react';
import ChatMenuModal from './ChatMenuModal.tsx';

type ChatHeaderProps = {
  chatroomId: string;
};

export default function ChatHeader({ chatroomId }: ChatHeaderProps) {
  const navigate = useNavigate();
  const onBackCluck = () => {
    navigate(-1);
  };
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
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
        <RequestMatchingLabel chatroomId={chatroomId} />
        <S.StyleMenu
          src="/svg/menu-dot-col-icon.svg"
          alt="menu-icon"
          onClick={onClick}
        />
      </S.RightWrapper>
      {isOpen && <ChatMenuModal onClose={() => setIsOpen(false)} />}
    </S.Container>
  );
}
