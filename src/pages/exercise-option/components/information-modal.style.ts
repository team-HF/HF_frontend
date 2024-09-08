import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20.625rem;
  height: 13.625rem;
  border-radius: 0.625rem;
  padding: 0.625rem;
  box-shadow: 0px 0px 10px 0px #00000040;
  position: fixed;
  top: 20.5rem;
  background-color: #ffffff;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  gap: 0.5rem;
`;
export const InformationContainer = styled.div<{ title: string }>`
  background-color: ${({ title, theme }) =>
    title === '고수' ? theme.colors.main : theme.colors.sub};
  display: flex;
  flex-direction: row;
  width: 18rem;
  height: 4.375rem;
  border-radius: 0.625rem;
  margin-top: 0.125rem;
`;

export const TitleContainer = styled.div<{ title: string }>`
  display: flex;
  color: ${({ title }) => (title === '고수' ? '#FFFFFF' : '#000000')};
  align-items: center;
  justify-content: center;
  width: 4rem;
  font-size: 0.8125rem;
  font-weight: 700;
`;

export const DescriptionContainer = styled.div<{ title: string }>`
  display: flex;
  color: ${({ title }) => (title === '고수' ? '#FFFFFF' : '#000000')};
  padding: 0.75rem;
  font-weight: 400;
  font-size: 0.875rem;
  align-items: center;
  line-height: 150%;
`;

export const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
`;
export const XIcon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  cursor: pointer;
`;
