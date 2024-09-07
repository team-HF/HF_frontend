import styled from 'styled-components';

export const Container = styled.div`
  width: 18.25rem;
  height: 8.5rem;
`;
export const StyleCategoryTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.375rem;
  align-items: center;
`;
export const StyleCategoryTitle = styled.p`
  font-size: 0.8125rem;
  font-weight: bold;
  line-height: 2.5rem;
  color: #797676;
  margin-left: 0.25rem;
`;

export const StyleSpan = styled.span`
  width: 0.6875rem;
  height: 0.6875rem;
  font-size: 0.6875rem;
  color: #d9d9d9;
  margin-bottom: 0.1rem;
`;

export const StyleCategoryContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.625rem;
`;

export const StyleOptionCard = styled.div<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.sub : '#FFFFFF'};
  border-radius: 0.625rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 8.125rem;
  height: 5.625rem;
  cursor: pointer;

  p {
    font-size: 0.8125rem;
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    white-space: pre-line;
    word-break: break-word;
    margin-top: 0.25rem;
  }
  span {
    display: block;
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }
`;
