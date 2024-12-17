import styled from 'styled-components';

export const ItemContainer = styled.div<{
  backgroundColor: '#ffffff' | '#F8F8F8';
}>`
  width: 8.6875rem;
  height: 2.75rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 0.5rem 1rem;
  gap: 0.625rem;
  border-top: 0.0625rem solid #ededed;
  border-bottom: 0.0625rem solid #ededed;
`;

export const StyledText = styled.p<{ color: '#4d4d4d' | '#000000' }>`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
  letter-spacing: -0.01em;
  color: ${({ color }) => color};
`;
