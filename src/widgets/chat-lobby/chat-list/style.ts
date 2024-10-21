import styled from 'styled-components';
import { theme } from '../../../app/theme';

export const Container = styled.div`
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const ListWrapper = styled.div`
  width: 20rem;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 37.5rem;
    margin-bottom: 8px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 37.5rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 65rem;
  }
`;
export const MainWrapper = styled.div`
  width: 266px;
  height: 72px;
  display: flex;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 34.125rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 34.125rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 61.625rem;
  }
`;
export const InfoWrapper = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChatDescriptionWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
`;
export const ProfileImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #dee2e6;
  box-shadow: 0px 0px 1px 0px #00000014;
  box-shadow: 0px 0px 1px 0px #00000014;
  box-shadow: 0px 1px 2px 0px #0000001f;
  border-radius: 50%;
  object-fit: cover;
`;
export const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
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
  color: #4d4d4d;
`;

export const SubWrapper = styled.div`
  width: 2.875rem;
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const StyledTimeStamp = styled.div`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  text-align: center;
  margin-bottom: 4px;
`;
