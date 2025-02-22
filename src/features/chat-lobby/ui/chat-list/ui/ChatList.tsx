import * as S from './chat-list.style';
import ChatWarningMessage from '../../../../../shared/ui/chat-warning-message/ChatWarningMessage';
import { ChatContent } from '../../../model/chat-lobby.types';
import ChatListItem from './ChatListItem';

type ChatListProps = {
  chatListData: ChatContent[];
};

export default function ChatList({ chatListData }: ChatListProps) {
  return (
    <S.Container>
      <ChatWarningMessage />
      {chatListData.map((chat) => (
        <ChatListItem key={chat.chatroomId} chat={chat} />
      ))}
    </S.Container>
  );
}
