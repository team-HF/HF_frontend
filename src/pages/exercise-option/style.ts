import styled from "styled-components";
import { theme } from "../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;

export const StyleH1 = styled.h1`
  padding: 0.625rem 0;
  width: 100%;
  font-size: 1.063rem;
  font-weight: 700;
  line-height: 1.412rem;
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.5rem;
`;

export const NextBtn = styled.button`
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem 1.25rem;
  margin-top: 3rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.main};
  &:disabled {
    background-color: #d9d9d9;
  }
`;
