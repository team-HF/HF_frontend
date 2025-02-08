import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 22.5rem;
  height: 2.5rem;
  gap: 0.625rem;
  padding: 8px 0px;
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

export const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.875rem;
  padding: 16px 0px;
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
export const IconWrapper = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const StyledTitle = styled.span`
  font: ${({ theme }) => theme.fontSize.heading_1};
  font-size: 22px;
  font-weight: bold;
  margin-left: 0.5rem;
`;
