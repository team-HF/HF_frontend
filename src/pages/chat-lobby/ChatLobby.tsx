import ChatList from '../../features/chat-lobby/chat-list/ui/ChatList';
import ChatLobbyHeader from '../../features/chat-lobby/chat-lobby-header/ui/ChatLobbyHeader';
import * as S from './style';
import { useState } from 'react';

export default function ChatLobby() {
  //임시 state
  const [hasChat, setHasChat] = useState(true);
  return (
    <S.Container>
      <S.HeaderWrapper>
        <ChatLobbyHeader />
      </S.HeaderWrapper>
      {!hasChat ? (
        <S.NoMatchingChatWrapper>
          <S.NoMatchingChatMainText>
            참여 중인 채팅이 없습니다.
          </S.NoMatchingChatMainText>
          <S.NoMatchingChatSubText>
            원하는 운동 고수에게 인사를 건네보세요.
          </S.NoMatchingChatSubText>
        </S.NoMatchingChatWrapper>
      ) : (
        <ChatList />
      )}
    </S.Container>
  );
}
