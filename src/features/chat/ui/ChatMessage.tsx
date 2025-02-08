import * as S from './chat-message-style';

type ChatMessageProps = {
  message: string;
  currentUserId: number;
};
export default function ChatMessage({
  message,
  currentUserId,
}: ChatMessageProps) {
  const isMine = message.senderId === currentUserId;
  return (
    <S.MessageWrapper isMine={isMine}>
      <S.MessageCard isMine={isMine}>
        {message.message}
        <S.Timestamp isMine={isMine}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </S.Timestamp>
      </S.MessageCard>
    </S.MessageWrapper>
  );
}
