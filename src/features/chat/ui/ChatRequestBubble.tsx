import BubbleMessageButton from './BubbleMessageButton';
import * as S from './chat-request-bubble.style';

export type ChatRequestBubbleProps = {
  messagePayload: {
    chatMessageType: string;
    meetingTime: string;
    meetingPlace: string;
    matchingId: number;
  };
  onAccept: (matchingId: number, accepted: boolean) => void;
  onReject: (matchingId: number, accepted: boolean) => void;
  isMine?: boolean;
};

export default function ChatRequestBubble({
  messagePayload,
  onAccept,
  onReject,
  isMine = false,
}: ChatRequestBubbleProps) {
  const isoTime = messagePayload.meetingTime;
  const datePart = isoTime.split('T')[0];
  const timePart = isoTime.split('T')[1]?.split(':').slice(0, 2).join(':');
  const { meetingPlace } = messagePayload;
  const messageType = messagePayload.chatMessageType;
  return (
    <S.Card $isMine={isMine}>
      <S.HeaderWrapper>
        <S.Header>매칭 신청</S.Header>
      </S.HeaderWrapper>
      <S.Content>
        <S.Row>
          <S.Label>날짜:</S.Label>
          <S.Value>{datePart}</S.Value>
        </S.Row>
        <S.Row>
          <S.Label>시간:</S.Label>
          <S.Value>{timePart}</S.Value>
        </S.Row>
        <S.Row>
          <S.Label>장소:</S.Label>
          <S.Value>{meetingPlace}</S.Value>
        </S.Row>
      </S.Content>
      <S.ButtonWrapper>
        {messageType === 'MATCHING_REQUEST' ? (
          <div style={{ display: 'flex', gap: 8 }}>
            <BubbleMessageButton
              variant="primary"
              onClick={() => onAccept(messagePayload.matchingId, true)}
            >
              수락
            </BubbleMessageButton>
            <BubbleMessageButton
              variant="secondary"
              onClick={() => onReject(messagePayload.matchingId, false)}
            >
              거절
            </BubbleMessageButton>
          </div>
        ) : (
          <BubbleMessageButton variant="secondary">
            매칭 조회
          </BubbleMessageButton>
        )}
      </S.ButtonWrapper>
    </S.Card>
  );
}
