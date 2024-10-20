import styled from 'styled-components';

export const Container = styled.button<{ $isValid: boolean }>`
  display: flex;
  width: 20rem;
  height: 3rem;
  background-color: ${({ theme, $isValid }) =>
    $isValid ? theme.colors.main : '#bbbbbb'};
  border: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  gap: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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

export const StyledText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.0313rem;
  color: #ffffff;
`;
