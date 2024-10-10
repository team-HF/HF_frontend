import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

export const DropdownHeader = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #000000;
  width: 100%;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 2.125rem;
  left: 0;
  width: 100%;
  border: 1px solid #ededed;
  background-color: #ffffff;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
`;
export const DropdownItem = styled.li`
  padding: 0.5rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
export const FieldText = styled.span<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) => ($isSelected ? '#000000' : '#999999')};
`;
export const ArrowIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
