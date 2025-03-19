import { styled } from 'styled-components';

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

export const DetailDiv = styled.div`
  display: flex;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  height: 34px;
  padding: 16px 20px;
  margin-top: 16px;
  background-color: #6541f2;
  justify-content: center;
  gap: 6px;
  border-radius: 34px;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: -0.01em;
  color: #ffffff;
  align-items: center;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const BottomWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  padding: 16px;
`;
