import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 320px;
  height: 154px;
  padding: 16px 0;
  gap: 16px;
  border-radius: 8px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  z-index: 10001;
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.0057em;
  text-align: center;
  color: #000000;
`;

export const ModalMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalMessage = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.0025em;
  text-align: center;
  color: #000000;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 210px;
`;

export const ConfirmButton = styled.button`
  flex: 1;
  height: 34px;
  width: 100px;
  background-color: #6541f2;
  border: none;
  border-radius: 34px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  height: 34px;
  width: 100px;
  background-color: #ffffff;
  border: 1px solid #6541f2;
  border-radius: 34px;
  color: #6541f2;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
