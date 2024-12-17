import styled from 'styled-components';

interface SelectBoxContainerProps {
  radius: '4px' | '34px';
  isSelected: boolean;
}

export const SelectBoxContainer = styled.button<SelectBoxContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.125rem;
  height: 1.125rem;
  border: 1.5px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.main : '#868E96')};
  background-color: ${({ isSelected }) => (isSelected ? '#E8E3FD' : '#FFFFFF')};
  cursor: pointer;
  border-radius: ${(props) => props.radius};
`;

export const CheckIcon = styled.img`
  width: 0.6rem;
  height: 0.5rem;
  color: #ffffff;
`;

export const Circle = styled.div`
  width: 0.375rem;
  height: 0.375rem;
  background-color: #ffffff;
  border-radius: 50%;
`;
