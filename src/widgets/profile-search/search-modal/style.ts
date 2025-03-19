import styled, { css } from "styled-components";
import { theme } from "../../../app/theme";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: white;
  padding-bottom: 2.6rem;
  z-index: 1000;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
  gap: 0.5rem;
`;
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h3`
  font-size: 1.063rem;
  line-height: 1.5rem;
  letter-spacing: -0.0057rem;
  font-weight: 600;
`;
export const DeleteBtn = styled.button`
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 0;
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray4};
  text-decoration: underline;
  text-underline-position: under;
`;
export const TagContainer = styled.div`
  display: flex;
  overflow-x: auto;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 1rem 0;
  gap: 0.5rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const WordTag = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0.625rem 0.625rem 0.875rem;
  flex: 1;
  min-width: 5.75rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 2rem;
  background-color: ${theme.colors.white};
  font-size: 0.75rem;
  letter-spacing: -0.0025rem;
  font-weight: 400;
  color: ${theme.colors.gray5};
  flex-shrink: 0;
`;
export const RemoveIcon = styled.img`
  width: 0.75rem;
  height: 0.75rem;
`;
export const GenderBtn = styled.button<{ selected: boolean }>`
  padding: 0.625rem;
  border: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  border-radius: 2.125rem;
  color: ${theme.colors.gray5};
  flex: 1;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${theme.colors.main};
      color: ${theme.colors.white};
      font-weight: 700;
      border: 0;
    `}
`;
export const ExerciseTag = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 2.125rem;
  padding: 0.625rem;
  border: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  border-radius: 2.125rem;
  color: ${theme.colors.gray5};
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${theme.colors.main};
      color: ${theme.colors.white};
      font-weight: 700;
      border: 0;
    `}
`;
