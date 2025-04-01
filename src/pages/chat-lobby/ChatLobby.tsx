import { useState, useContext } from 'react';
import ChatList from '../../features/chat-lobby/ui/chat-list/ui/ChatList';
import EmptyChatList from '../../features/chat-lobby/ui/EmptyChatList';
import * as S from './style';
import { useGetChatRooms } from '../../features/chat-lobby/api/useGetChatRooms';
import { MatchingStatus } from '../../features/chat-lobby/model/chat-lobby.types';
import { SocketContext } from '../../app/providers/SocketProvider';
import { useQueryClient } from '@tanstack/react-query';
import ChatWarningMessage from '../../shared/ui/chat-warning-message/ChatWarningMessage';
import NewHeader from '../../shared/ui/new-header/NewHeader';
import { useNavigate } from 'react-router-dom';
import Loader from '../../shared/ui/loader/Loader';

export default function ChatLobby() {
  const socketContext = useContext(SocketContext);
  if (!socketContext) {
    throw new Error('Socket 연결 실패');
  }
  const { memberId } = socketContext;
  const queryClient = useQueryClient();

  const [filterStatus, setFilterStatus] = useState<string>('전체');
  const [isOpenDropdownFilter, setIsOpenDropdownFilter] =
    useState<boolean>(false);
  const filterOptions = ['전체', '매칭 진행 중', '매칭 종료', '매칭 중단'];

  const matchingStatus = (() => {
    switch (filterStatus) {
      case '전체':
        return MatchingStatus.ALL;
      case '매칭 진행 중':
        return MatchingStatus.MATCHING_IN_PROGRESS;
      case '매칭 종료':
      case '매칭 중단':
        return MatchingStatus.MATCHING_TERMINATED;
      default:
        return MatchingStatus.ALL;
    }
  })();

  const handleFilterChange = (option: string) => {
    setFilterStatus(option);
    setIsOpenDropdownFilter(false);
    queryClient.invalidateQueries({
      queryKey: [
        'chat-lobby-content',
        memberId,
        (() => {
          switch (option) {
            case '전체':
              return MatchingStatus.ALL;
            case '매칭 진행 중':
              return MatchingStatus.MATCHING_IN_PROGRESS;
            case '매칭 종료':
            case '매칭 중단':
              return MatchingStatus.MATCHING_TERMINATED;
            default:
              return MatchingStatus.ALL;
          }
        })(),
        1,
        10,
      ],
    });
  };

  const {
    data: chatData,
    isLoading,
    error,
  } = useGetChatRooms({
    participantId: memberId,
    searchCondition: matchingStatus,
    page: 1,
    pageSize: 10,
  });
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loader />;
  }
  if (error) return <p>Error</p>;
  if (!chatData) return <p>데이터를 불러올 수 없습니다.</p>;

  return (
    <S.Container>
      <NewHeader title="채팅" isBackBtn onClickBack={onClickBack} isAlarmBtn />
      <ChatWarningMessage />
      <S.FilterContainer>
        <S.FilterButton
          onClick={() => setIsOpenDropdownFilter((prev) => !prev)}
        >
          {filterStatus}
          <S.DropdownArrowWrapper>
            <img src="/svg/under-arrow-icon.svg" alt="under-arrow-icon" />
          </S.DropdownArrowWrapper>
        </S.FilterButton>
        {isOpenDropdownFilter && (
          <S.Dropdown>
            {filterOptions.map((option, idx) => (
              <S.DropdownItem
                key={idx}
                onClick={() => handleFilterChange(option)}
              >
                {option}
              </S.DropdownItem>
            ))}
          </S.Dropdown>
        )}
      </S.FilterContainer>
      {chatData.length === 0 ? (
        <EmptyChatList />
      ) : (
        <ChatList chatListData={chatData} />
      )}
    </S.Container>
  );
}
