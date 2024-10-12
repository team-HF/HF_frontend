import styled from 'styled-components';

export const Container = styled.div`
  width: 22.5rem;
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
