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
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1920px) {
    padding: 0 4rem;
  }
`;
