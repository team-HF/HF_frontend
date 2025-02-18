import * as S from './chat-menu-modal.style';

type ChatMenuModal = {
  onClose: () => void;
};
export default function ChatMenuModal({ onClose }: ChatMenuModal) {
  const modalClose = () => {
    onClose();
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
              <S.ModalText>프로필 조회하기</S.ModalText>
            </S.ProfileButton>

            <S.ButtonWrapper>
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

              <S.StyledButton>
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
      </S.Backdrop>
    </div>
  );
}
