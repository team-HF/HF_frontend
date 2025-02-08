import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 138px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  gap: 16px;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 9999;
`;
export const UpperText = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.0057em;
`;
export const UnderText = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16.01px;
  letter-spacing: -0.0025em;
`;

export const BUttonWrapper = styled.div`
  width: 100px;
`;
