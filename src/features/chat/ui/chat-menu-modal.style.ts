import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10002;
`;

export const Modal = styled.div`
  width: 360px;
  background: #ffffff;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const ProfileButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 16px;
  &:hover {
    background: #f9fafb;
  }

  border: 1px solid #dee2e6;
`;
export const ButtonWrapper = styled.div`
  padding: 0 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
`;
export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #dee2e6;
  &:hover {
    background: #f9fafb;
  }

  i {
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }
`;
export const CancelButtonWrapper = styled.div`
  padding: 0 20px;
`;
export const CancelButton = styled.button`
  width: 100%;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  &:hover {
    background: #f9fafb;
  }
`;

export const ModalText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -1%;
`;

export const ModalSvg = styled.img`
  margin-left: 16px;
`;
