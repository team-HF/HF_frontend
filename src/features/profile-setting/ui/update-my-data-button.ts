import { styled } from 'styled-components';
import { theme } from '../../../app/theme';

export const Btn = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 0.5rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.main};
  margin-top: 40px;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    background-color: #f2f2f2;
    color: #868e96;
  }
`;
