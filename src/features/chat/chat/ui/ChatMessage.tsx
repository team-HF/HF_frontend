import * as S from './chat-message-style';
import { ChatMessageProps } from '../../../../shared/types/chat';

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
