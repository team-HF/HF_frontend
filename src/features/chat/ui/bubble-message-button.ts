import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface ButtonProps {
  variant: 'primary' | 'secondary';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 34px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 34px;
  padding: 0 16px;

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background-color: #6541f2;
          color: #fff;
          &:hover {
            background-color: #5835d9;
          }
        `
      : css`
          background-color: #fff;
          color: #6541f2;
          border: 1px solid #6541f2;
          &:hover {
            background-color: #f5f0ff;
          }
        `}
`;
