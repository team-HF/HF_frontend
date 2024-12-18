import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 22.5rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const ProfileContainer = styled.div`
  margin-left: 2.125rem;
  margin-right: 2.125rem;
`;

export const LargeButtonWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const MatchingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 22.5rem;
  align-items: center;
  gap: 11px;
  @media (min-width: 768px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const MatchingTitle = styled.div`
  font-size: 1.0625rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: -0.0625rem;
  margin-left: 1.25rem;
`;

export const FooterContainer = styled.div`
  width: 22.5rem;
`;
