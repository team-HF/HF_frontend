import { styled } from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 220px;
  padding: 16px 0px;
  border-radius: 8px;
  background: #ffffff;
  gap: 16px;
  z-index: 101;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 24px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 16.01px;
  margin-bottom: 16px;
`;

export const Warning = styled.p`
  font-size: 12px;
  color: #ff5a5a;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WarningIcon = styled.span`
  margin-right: 4px;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ConfirmButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #6541f2;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #5639d3;
  }
`;

export const CancelButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #6541f2;
  background: #ffffff;
  color: #6541f2;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #f4f4f4;
  }
`;
