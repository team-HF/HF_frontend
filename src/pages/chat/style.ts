import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 40rem;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;
