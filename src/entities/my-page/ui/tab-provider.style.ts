import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.875rem;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1.5rem;
  position: relative;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 24.375rem;
  width: 100%;
`;

export const Tab = styled.div`
  cursor: pointer;
  position: relative;
  flex: 1;
  width: 100%;
`;

export const TabIndicator = styled.span`
  position: absolute;
  top: 1.75rem;
  left: 0;
  background-color: ${({ theme }) => theme.colors.main};
  height: 0.125rem;
  width: 12.1875rem;

  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 20rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 33.75rem;
  }
`;

export const StyleHr = styled.hr`
  border: 0.0156rem solid #c2c2c2;
  width: 100%;
  margin-top: 0.3125rem;
`;
