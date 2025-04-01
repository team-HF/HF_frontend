import * as S from './chat-list.style';
import { ChatContent } from '../../../model/chat-lobby.types';
import ChatListItem from './ChatListItem';
import PageForm from '../../../../../shared/ui/page-form/PageForm';

type ChatListProps = {
  chatListData: ChatContent[];
};

export default function ChatList({ chatListData }: ChatListProps) {
  return (
    <PageForm isGNB={true} isFooter={false}>
      <S.Container>
        {chatListData.map((chat) => (
          <ChatListItem key={chat.chatroomId} chat={chat} />
        ))}
      </S.Container>
    </PageForm>
  );
}
