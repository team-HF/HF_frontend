import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
  flex: 1;
  min-height: 70vh;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;
