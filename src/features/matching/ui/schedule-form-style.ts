import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0px;
  justify-self: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 640px;
  }

  @media (min-width: 1200px) {
    width: 1080px;
  }
`;
