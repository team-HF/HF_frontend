import { styled } from 'styled-components';

export const Container = styled.div`
  width: 360px;
  box-sizing: border-box;
  display: flex;
  justify-self: center;
  flex-direction: column;
  max-height: 100vh;
  @media (min-width: 768px) {
    width: 40rem;
  }
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
  margin-top: auto;
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  margin-top: -40px;
`;
