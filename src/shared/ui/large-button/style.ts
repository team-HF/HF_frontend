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
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const StyledText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.0313rem;
  color: #ffffff;
`;
