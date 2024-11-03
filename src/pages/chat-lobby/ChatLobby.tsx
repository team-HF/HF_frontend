import * as S from './style';
import ChatLobbyHeader from '../../widgets/chat-lobby/chat-lobby-header/ChatLobbyHeader';
import { useState } from 'react';
import ChatList from '../../widgets/chat-lobby/chat-list/ChatList';

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
