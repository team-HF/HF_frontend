import { useEffect, useState } from 'react';
import * as S from './chat-list-item.style';
import OnGoingMatchCard from '../../../../../shared/ui/card/OnGoingMatchCard';
import ChatListDropdown from './ChatListDropdown';
import ChatConfirmModal from '../../../../../shared/ui/chat-confirm-modal/ChatConfirmModal';
import { useGetMatchingUserInfo } from '../../../../matching/api/useGetMatchingUserInfo';
import { ChatContent } from '../../../model/chat-lobby.types';
import { getSgisApiAccessToken } from '../../../../../shared/api/getSgisApiAccessToken';
import { getSgisLocation } from '../../../../../shared/api/getSgisLocation';
import { useGetDate } from '../../../../../shared/utils/useGetDate';

type ChatListItemProps = {
  chat: ChatContent;
};

export default function ChatListItem({ chat }: ChatListItemProps) {
  const [location, setLocation] = useState('');
  const { data: opponentInfo } = useGetMatchingUserInfo(
    chat.opponentParticipantId
  );
  const [isDropdownActive, setIsDropdownActive] = useState<boolean | null>(
    false
  );
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    (async () => {
      if (opponentInfo) {
        await getSgisApiAccessToken();
        const result = await getSgisLocation(
          `${opponentInfo?.cd1}${opponentInfo?.cd2}`,
          `${opponentInfo?.cd1}${opponentInfo?.cd2}${opponentInfo?.cd3}`
        );
        const addressParts = result.full_addr.split(' ')[1];
        setLocation(addressParts);
      }
    })();
  }, [opponentInfo]);

  const toggleDropdown = () => {
    setIsDropdownActive((prev) => !prev);
  };

  // 모달 오픈 시 스크롤 비활성화
  useEffect(() => {
    document.body.style.overflow = isOpenModal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenModal]);

  // 외부 클릭 시 드롭다운 닫기 처리
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (target.closest('.dropdown') || target.closest('.menu-dot')) return;
    setIsDropdownActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <S.ListWrapper key={chat.chatroomId}>
      <S.ProfileImageWrapper>
        <S.ProfileImage
          src={
            opponentInfo?.profileImageUrl ||
            chat.opponentParticipantProfileImageUrl ||
            '/svg/default-profile-icon.svg'
          }
          alt="profile-icon"
        />
      </S.ProfileImageWrapper>
      <S.MainWrapper>
        <S.TextWrapper>
          <S.StyledNickname>
            {opponentInfo?.nickname || chat.opponentParticipantNickname}
          </S.StyledNickname>
          <S.StyledLocation>{location}</S.StyledLocation>
          <S.StyledTimeStamp>{useGetDate(chat.chatSentTime)}</S.StyledTimeStamp>
        </S.TextWrapper>
        <S.ChatDescriptionWrapper>
          <S.StyledChat>{chat.lastChatMessage}</S.StyledChat>
        </S.ChatDescriptionWrapper>
      </S.MainWrapper>
      <S.SubWrapper>
        <S.StyledMenuDotIcon
          src="/svg/menu-dot-icon.svg"
          alt="menu-dot-icon"
          className="menu-dot"
          onClick={toggleDropdown}
        />
        {isDropdownActive && (
          <div className="dropdown" onClick={(e) => e.stopPropagation()}>
            <ChatListDropdown
              setIsOpenModal={setIsOpenModal}
              setActiveDropdown={setIsDropdownActive}
            />
          </div>
        )}
        <S.MatchingCardWrapper>
          <OnGoingMatchCard />
        </S.MatchingCardWrapper>
      </S.SubWrapper>
      {isOpenModal && (
        <>
          <S.ModalOverlay />
          <ChatConfirmModal
            onConfirm={() => setIsOpenModal(false)}
            onCancel={() => setIsOpenModal(false)}
          />
        </>
      )}
    </S.ListWrapper>
  );
}
