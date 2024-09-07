import styled from 'styled-components';

export const StyledButton = styled.button<{
  color: 'main' | 'sub' | 'point';
  disabled?: boolean;
}>`
  background-color: ${({ theme, color, disabled }) =>
    disabled ? '#999999' : theme.colors[color]};
  color: ${({ theme }) => theme.font.colors.white};
  width: 20.125rem;
  height: 2.8125rem;
  border: none;
  border-radius: 0.3125rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
