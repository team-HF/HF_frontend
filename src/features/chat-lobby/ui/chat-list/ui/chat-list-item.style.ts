import styled from 'styled-components';
import { theme } from '../../../../../app/theme';

export const ListWrapper = styled.div`
  width: 360px;
  height: 52px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  @media (min-width: 768px) {
    width: 34.125rem;
  }

  @media (min-width: 1200px) {
    width: 61.625rem;
  }
`;
export const InfoWrapper = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 8px;
`;

export const ChatDescriptionWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
`;
export const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: #dee2e6;
  box-shadow: 0px 1px 2px 0px #0000001f;
  border-radius: 50%;
`;
export const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledNickname = styled.span`
  font: ${theme.fontSize.body_2};
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`;
export const StyledLocation = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  color: #8e8e93;
  margin-left: 8px;
`;

export const StyledChat = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.005em;
  text-align: left;
`;

export const SubWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const StyledTimeStamp = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  color: #8e8e93;
  margin-left: 8px;
`;

export const StyledMenuDotIcon = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
`;

export const MatchingCardWrapper = styled.div`
  margin-top: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
`;
