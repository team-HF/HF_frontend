import styled from 'styled-components';

export const StyledButton = styled.button<{
  color: string;
  disabled?: boolean;
  width: string;
  height: string;
}>`
  background-color: ${({ theme, color, disabled }) =>
    disabled ? '#999999' : theme.colors[color]};
  color: ${({ theme }) => theme.colors.white};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: none;
  border-radius: 0.3125rem;
`;
