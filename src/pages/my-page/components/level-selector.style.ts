import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.0625rem;
`;
export const StyleLevelSelectorContainer = styled.div`
  display: flex;
  gap: 1.125rem;
  justify-content: center;
  position: relative;

  img {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 0;
    right: 0.8rem;
  }
`;

export const StyleInformationIcon = styled.img`
  width: 0.5rem;
  height: 0.5rem;
`;
export const StyleLevelSelectorButton = styled.button<{ selected: boolean }>`
  background-color: ${({ selected, theme, children }) =>
    selected && children === '고수'
      ? theme.colors.main
      : selected && children === '새싹'
      ? theme.colors.sub
      : '#F6F6F6'};
  width: 6.6rem;
  height: 2.375rem;
  border-radius: 0.625rem;
  border: none;
  color: ${({ selected, children }) =>
    selected && children === '고수'
      ? '#FFFFFF'
      : selected && children === '새싹'
      ? '#000000'
      : '#868686'};
  font-size: 0.75rem;
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? '700' : 'normal')};
`;

export const StyleP = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.375rem;
  color: #000000;
`;
