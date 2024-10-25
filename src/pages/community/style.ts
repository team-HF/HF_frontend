import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1920px) {
    padding: 0 26.25rem;
  }
`;
export const PostContainer = styled.div`
  width: 20rem;
  @media (min-width: 768px) and (max-width: 1920px) {
    width: 40rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
