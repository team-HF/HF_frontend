import styled from 'styled-components';

export const StyledMediumButton = styled.button<{
  $backgroundColor: string;
  $border: string;
  disabled?: boolean;
}>`
  background-color: ${({ $backgroundColor, disabled }) =>
    disabled ? '#F2F2F2' : $backgroundColor};

  width: 12.5rem;
  height: 3rem;
  border: ${({ $border, disabled }) => (disabled ? 'none' : $border)};
  border-radius: 0.3125rem;
`;

export const StyledText = styled.p<{
  $color: string;
  disabled?: boolean;
}>`
  color: ${({ theme, $color, disabled }) =>
    disabled ? theme.colors.gray5 : $color};
`;
