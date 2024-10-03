import styled from 'styled-components';

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: relative;
  width: 3.1875rem;
  height: 1.5rem;
  gap: 0.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  white-space: nowrap;
  user-select: none;
  &:hover {
    background-color: ${(props) => (props.isOpen ? 'inherit' : '#f0f0f0')};
  }
`;

export const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 0.0625rem;
  justify-content: space-between;
  width: 100%;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;

export const ArrowIcon = styled.span<{ isOpen: boolean }>`
  margin-left: 0.25rem;
`;

export const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  width: 100%;
  height: auto;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 50;
  list-style: none;
`;

export const DropdownItem = styled.li`
  display: flex;
  width: 3.1875rem;
  height: 1.5rem;
  font-weight: 500;
  line-height: 0.875rem;
  letter-spacing: -0.0313rem;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
