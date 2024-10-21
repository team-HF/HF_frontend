import { styled } from 'styled-components';
import { theme } from '../../../app/theme';
export const Container = styled.div`
  display: flex;
  width: 360px;
  flex-direction: row;
  height: 3.125rem;
  align-items: center;
  gap: 0.625rem;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border-bottom: 2px solid #f1f3f5;

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

export const HeaderText = styled.span`
  font: ${theme.fontSize.heading_1};
  font-size: 22px;
  font-weight: 700;
`;

export const IconWrapper = styled.div`
  width: 2.75rem;
  height: 1.125rem;
`;
export const BellIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`;

export const FilterIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
  margin-right: 8px;
`;
