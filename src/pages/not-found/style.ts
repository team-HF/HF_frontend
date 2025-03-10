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
export const NotFoundImage = styled.img`
  width: 18.125rem;
  height: 11.875rem;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const NotFoundText = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0057rem;
  color: #dee2e6;
`;
