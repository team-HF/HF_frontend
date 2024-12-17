import styled from 'styled-components';

interface SegmentProps {
  isSelected: boolean;
}

export const SegmentedControlContainer = styled.div`
  display: flex;
  width: 118px;
  height: 28px;
  padding: 2px;
  gap: 10px;
  background-color: #d3d6db;
  border-radius: 5px;
`;

export const Segment = styled.button<SegmentProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) =>
    isSelected ? '#ffffff' : 'transparent'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8125rem;
  line-height: 1.125rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#ffffff' : '#e0e0e0'};
  }
`;
