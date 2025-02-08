import styled from 'styled-components';

type LabelContainerProps = {
  selected: boolean;
};

export const LabelContainer = styled.div<LabelContainerProps>`
  height: 34px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 34px;
  border: 1px solid #dee2e6;
  background-color: ${({ selected }) => (selected ? '#6541F2' : 'transparent')};
  cursor: pointer;
  white-space: nowrap;
`;

type LabelTextProps = {
  selected: boolean;
};

export const LabelText = styled.span<LabelTextProps>`
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.0031em;
  color: ${({ selected }) => (selected ? '#ffffff' : '#868E96')};
`;
