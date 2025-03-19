import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  flex: 1;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;
