import styled from 'styled-components';
import { theme } from '../../../app/theme';

export const Container = styled.div`
  width: 22.5rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
`;
export const NoMatchingChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 68px;
  margin-top: 15rem;
`;
export const NoMatchingChatMainText = styled.span`
  font-size: 18px;
  font-weight: 700;
  font: ${theme.fontSize.headline_1};
  margin-bottom: 10px;
  color: #8e8e93;
`;
export const NoMatchingChatSubText = styled.span`
  font-size: 12px;
  font-weight: 400;
  font: ${theme.fontSize.cation_1};
  color: #8e8e93;
`;
