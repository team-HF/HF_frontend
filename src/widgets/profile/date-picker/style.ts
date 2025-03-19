import styled from 'styled-components';
import { theme } from '../../../app/theme';

export const Container = styled.div<{ $type_year: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0.375rem 0.625rem;
  width: ${({ $type_year }) => ($type_year ? '6.25rem' : '4.75rem')};
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const SelectedDate = styled.span<{ selected: string | null }>`
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  color: ${({ selected }) => (selected ? theme.colors.black : '#8E8E8E')};
`;

export const Arrow = styled.img<{ open: boolean }>`
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(270deg)')};
  color: #d9d9d9;
`;

export const OptionContainer = styled.div<{
  open: boolean;
  $type_year: boolean;
}>`
  position: absolute;
  top: 2.625rem;
  left: -1px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  height: 17rem;
  width: ${({ $type_year }) => ($type_year ? '6.25rem' : '4.75rem')};
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  z-index: 1;
  overflow: scroll;
  cursor: pointer;
`;

export const Option = styled.button`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #dee2e6;
  background-color: white;
  padding: 0.5rem;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background-color: ${theme.colors.marin_hover_active};
  }
`;
