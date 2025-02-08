import { useState } from 'react';
import * as S from './style';

export default function ChatWarningMessage() {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(true);
  };
  return isClose ? null : (
    <S.Container>
      <S.StyleSpan>대화는 HF 채팅방에서 하는 것이 가장 안전해요.</S.StyleSpan>
      <S.MiddleWrapper>
        <S.StyleSpan>
          만약 상대방이 외부 메신저로 유도하거나 금전적 요구를 하는 경우,
        </S.StyleSpan>
        <S.StyleSvg
          src="/svg/arrow-up-icon.svg"
          alt="arrow-up-icon"
          onClick={handleClose}
        />
      </S.MiddleWrapper>
      <S.StyleSpan>피해가 있을 수 있으니 주의하세요!</S.StyleSpan>
    </S.Container>
  );
}
