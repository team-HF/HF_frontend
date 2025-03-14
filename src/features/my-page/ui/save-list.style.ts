import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  gap: 2.25rem;
  flex-flow: wrap;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const ProfileWrapper = styled.div`
  width: 80px;
  height: 80px;
`;
export const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  margin-bottom: 16px;
`;
export const ProfileIcon = styled.img`
  width: 100%;
  cursor: pointer;
  height: 100%;
  background-color: #f1f3f5;
  box-shadow: 0px 0px 1px 0px #00000014;
  box-shadow: 0px 1px 4px 0px #00000014;
  box-shadow: 0px 2px 8px 0px #0000001f;
  border-radius: 50%;
`;

export const HeartIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileText = styled.span`
  font-size: 0.75rem;
  font-weight: 510;
  line-height: 0.955rem;
  color: #000000;
`;
