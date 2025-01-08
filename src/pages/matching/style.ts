import { styled } from 'styled-components';

export const Container = styled.div`
  width: 360px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-self: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1200px) {
    width: 1080px;
  }
`;

export const DetailDiv = styled.div`
  display: flex;
  width: 320px;
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
    width: 640px;
  }

  @media (min-width: 1200px) {
    width: 1080px;
  }
`;
