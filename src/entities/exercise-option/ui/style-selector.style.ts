import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CategoryTitle = styled.p`
  padding: 0.625rem 0;
  font-size: 0.688rem;
  font-weight: bold;
  line-height: 1.273rem;
  letter-spacing: -0.0031rem;
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 5.625rem;
  @media (min-width: 768px) {
    height: 6.25rem;
  }
`;

export const OptionCard = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.main};
  border-radius: 0.5rem;
  background-color: ${({ selected }) =>
    selected ? theme.colors.main : theme.colors.white};
  cursor: pointer;

  img {
    height: 2rem;
    @media (min-width: 768px) {
      height: 3rem;
    }
  }

  p {
    font-size: 1rem;
    font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
    white-space: pre-line;
    word-break: break-word;
    color: ${({ selected }) =>
      selected ? theme.colors.white : theme.colors.main};
  }
`;
