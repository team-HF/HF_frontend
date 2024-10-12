import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 22.5rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
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

  margin-top: 1.75rem;
  padding: 0 1.25rem;
  max-width: 22.5rem;
  gap: 11px;
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
