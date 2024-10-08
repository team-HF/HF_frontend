import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 20rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 8px;
  padding: 1rem 1.25rem;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.0313rem;
  color: #ffffff;
`;
