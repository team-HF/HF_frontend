import ChatList from '../../features/chat-lobby/ui/chat-list/ui/ChatList';
import ChatLobbyHeader from '../../features/chat-lobby/ui/chat-lobby-header/ui/ChatLobbyHeader';
import EmptyChatList from '../../features/chat-lobby/ui/EmptyChatList';
import * as S from './style';
import { useGetChatRooms } from '../../features/chat-lobby/api/useGetChatRooms';
import { useGetMyData } from '../../shared/api/useGetMyData';
export default function ChatLobby() {
  const { data: myData } = useGetMyData();
  const participantId = myData?.memberId;
  const {
    data: chatData,
    isLoading,
    error,
  } = useGetChatRooms({ participantId });

  if (isLoading) <p>Loading...</p>;
  if (error) <p>error</p>;
  return (
    <S.Container>
      <S.HeaderWrapper>
        <ChatLobbyHeader />
      </S.HeaderWrapper>
      {chatData?.length === 0 ? <EmptyChatList /> : <ChatList />}
    </S.Container>
  );
}
