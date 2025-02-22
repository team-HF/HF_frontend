import ChatList from '../../features/chat-lobby/ui/chat-list/ui/ChatList';
import ChatLobbyHeader from '../../features/chat-lobby/ui/chat-lobby-header/ui/ChatLobbyHeader';
import EmptyChatList from '../../features/chat-lobby/ui/EmptyChatList';
import * as S from './style';
import { useGetChatRooms } from '../../features/chat-lobby/api/useGetChatRooms';
import { MatchingStatus } from '../../features/chat-lobby/model/chat-lobby.types';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useContext } from 'react';
export default function ChatLobby() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket 연결 실패');
  }
  const { memberId } = socketContext;
  const {
    data: chatData,
    isLoading,
    error,
  } = useGetChatRooms({
    participantId: memberId,
    searchCondition: MatchingStatus.ALL,
    page: 1,
    pageSize: 10,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;
  return (
    <S.Container>
      <S.HeaderWrapper>
        <ChatLobbyHeader />
      </S.HeaderWrapper>
      {chatData?.length === 0 ? <EmptyChatList /> : <ChatList />}
    </S.Container>
  );
}
