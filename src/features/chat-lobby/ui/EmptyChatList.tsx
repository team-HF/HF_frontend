import * as S from './empty-chat-list.style';
export default function EmptyChatList() {
  return (
    <S.NoMatchingChatWrapper>
      <S.NoMatchingChatMainText>
        참여 중인 채팅이 없습니다.
      </S.NoMatchingChatMainText>
      <S.NoMatchingChatSubText>
        원하는 운동 고수에게 인사를 건네보세요.
      </S.NoMatchingChatSubText>
    </S.NoMatchingChatWrapper>
  );
}
