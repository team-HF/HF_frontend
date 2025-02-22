import * as S from './chat-list-style';
import OnGoingMatchCard from '../../../../../shared/ui/card/OnGoingMatchCard';
import { useEffect, useState } from 'react';
import ChatListDropdown from './ChatListDropdown';
import ChatConfirmModal from '../../../../../shared/ui/chat-confirm-modal/ChatConfirmModal';
import ChatWarningMessage from '../../../../../shared/ui/chat-warning-message/ChatWarningMessage';

export default function ChatList() {
  const dummyUsers = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    profileImage: '/svg/default-profile-icon.svg',
    nickname: `유저 ${i + 1}`,
    matchCount: Math.floor(Math.random() * 10) + 1,
    status: Math.random() > 0.5 ? 'FINISHED' : 'IN_PROGRESS',
    location: `지역 ${i + 1}`,
    time: Date.now(),
    hashtags: [
      '#소규모형',
      '#귀차니즘형',
      '#기능성피트니스위주',
      '#헬스헬스무조건벌크업',
    ],
    levels: 3,
  }));

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleConfirm = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  const toggleDropdown = (id: number) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  //모달 오픈 시 스크롤 비활성화
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenModal]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.closest('.dropdown') || target.closest('.menu-dot')) {
      return;
    }
    setActiveDropdown(null);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <S.Container>
      <ChatWarningMessage />
      {dummyUsers.map((user) => (
        <S.ListWrapper key={user.id}>
          <S.ProfileImageWrapper>
            <S.ProfileImage src={user.profileImage} alt="profile-icon" />
          </S.ProfileImageWrapper>
          <S.MainWrapper>
            <S.TextWrapper>
              <S.StyledNickname>{user.nickname}</S.StyledNickname>
              <S.StyledLocation>{user.location}</S.StyledLocation>
              <S.StyledTimeStamp>N분전</S.StyledTimeStamp>
            </S.TextWrapper>
            <S.ChatDescriptionWrapper>
              <S.StyledChat>안녕하세요.</S.StyledChat>
            </S.ChatDescriptionWrapper>
          </S.MainWrapper>
          <S.SubWrapper>
            <S.StyledMenuDotIcon
              src="/svg/menu-dot-icon.svg"
              alt="menu-dot-icon"
              className="menu-dot"
              onClick={() => toggleDropdown(user.id)}
            />
            {activeDropdown === user.id && (
              <div className="dropdown" onClick={(e) => e.stopPropagation()}>
                <ChatListDropdown
                  setIsOpenModal={setIsOpenModal}
                  setActiveDropdown={setActiveDropdown}
                />
              </div>
            )}
            <S.MatchingCardWrapper>
              <OnGoingMatchCard />
            </S.MatchingCardWrapper>
          </S.SubWrapper>
        </S.ListWrapper>
      ))}
      {isOpenModal && (
        <>
          <S.ModalOverlay />
          <ChatConfirmModal onConfirm={handleConfirm} onCancel={handleCancel} />
        </>
      )}
    </S.Container>
  );
}
