import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 320px;
  height: 200px;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.57%;
  text-align: center;
  color: #000;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
`;

export const PurpleButton = styled.button`
  width: 100%;
  padding: 12px 0;
  background-color: #6541f2;
  color: white;
  border: none;
  border-radius: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -3%;
  cursor: pointer;
`;

export const WhiteButton = styled(PurpleButton)`
  background-color: white;
  color: #6541f2;
  border: 2px solid #6541f2;
`;
