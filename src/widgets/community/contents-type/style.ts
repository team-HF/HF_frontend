import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 48rem;
    padding: 0 4rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
