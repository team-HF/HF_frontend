import styled from 'styled-components';

export const StyledButton = styled.button<{
  color: 'main' | 'sub' | 'point';
  disabled?: boolean;
  width: string;
  height: string;
}>`
  background-color: ${({ theme, color, disabled }) =>
    disabled ? '#999999' : theme.colors[color]};
  color: ${({ theme }) => theme.font.colors.white};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 0.3125rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
