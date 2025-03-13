import { useNavigate } from 'react-router-dom';
import * as S from './chat-menu-modal.style';
import { useState } from 'react';
import ChatConfirmModal from '../../../shared/ui/chat-confirm-modal/ChatConfirmModal';
import StopMatchingRoom from './StopMatchingRoom';

type ChatMenuModal = {
  onClose: () => void;
  matchingUserId: number;
};
export default function ChatMenuModal({
  onClose,
  matchingUserId,
}: ChatMenuModal) {
  const navigate = useNavigate();
  const [isOpenExitModal, setIsOpenExitModal] = useState(false);
  const [isOpenStopModal, setIsOpenStopModal] = useState(false);

  const exitRoom = () => {
    setIsOpenExitModal(true);
  };
  const stopMatching = () => {
    setIsOpenStopModal(true);
  };
  const modalClose = () => {
    onClose();
  };
  const navigateToProfile = () => {
    navigate(`/member/${matchingUserId}/profile`);
  };
  return (
    <div>
      <S.Backdrop>
        <S.Modal>
          <S.Content>
            <S.ProfileButton>
              <S.ModalSvg
                src="/svg/profile-icon.svg"
                alt="profile-icon"
                style={{ marginLeft: '36px' }}
              />
              <S.ModalText onClick={navigateToProfile}>
                프로필 조회하기
              </S.ModalText>
            </S.ProfileButton>

            <S.ButtonWrapper>
              <S.StyledButton onClick={stopMatching}>
                <S.ModalSvg src="/svg/ban-icon.svg" alt="ban-icon" />
                <S.ModalText>채팅중단</S.ModalText>
              </S.StyledButton>

              <S.StyledButton>
                <S.ModalSvg src="/svg/ban-icon.svg" alt="ban-icon" />
                <S.ModalText>차단하기</S.ModalText>
              </S.StyledButton>

              <S.StyledButton>
                <S.ModalSvg
                  src="/svg/triangle-exclamation-icon.svg"
                  alt="triangle-exclamation"
                />
                <S.ModalText>신고하기</S.ModalText>
              </S.StyledButton>

              <S.StyledButton>
                <S.ModalSvg src="/svg/alram-off-icon.svg" alt="alram-off" />
                <S.ModalText>알림 끄기</S.ModalText>
              </S.StyledButton>

              <S.StyledButton onClick={exitRoom}>
                <S.ModalSvg src="/svg/exit-icon.svg" alt="exit" />
                <S.ModalText style={{ color: 'red' }}>
                  채팅방 나가기
                </S.ModalText>
              </S.StyledButton>
            </S.ButtonWrapper>
          </S.Content>
          <S.CancelButtonWrapper>
            <S.CancelButton onClick={modalClose}>취소</S.CancelButton>
          </S.CancelButtonWrapper>
        </S.Modal>
        {isOpenExitModal && (
          <>
            <S.ModalOverlay />
            <ChatConfirmModal
              onConfirm={() => setIsOpenExitModal(false)}
              onCancel={() => setIsOpenExitModal(false)}
            />
          </>
        )}
        {isOpenStopModal && (
          <>
            <S.ModalOverlay />
            <StopMatchingRoom
              onConfirm={() => setIsOpenStopModal(false)}
              onCancel={() => setIsOpenStopModal(false)}
            />
          </>
        )}
      </S.Backdrop>
    </div>
  );
}
