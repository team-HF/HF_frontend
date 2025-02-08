import * as S from "./chat-message-style";

type TMessage = {
  senderId: number;
  message: string;
  timestamp: string;
};

type ChatMessageProps = {
  message: TMessage;
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
