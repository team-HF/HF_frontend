import styled, { css } from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  padding: 0.625rem 1.25rem;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 48rem;
    padding: 0.625rem 4rem;
  }
  @media (min-width: 1920px) {
    width: 67.5rem;
  }
`;
export const LabelContainer = styled.div`
  display: flex;
  gap: 8px;
`;
export const LabelBtn = styled.button<{ checked: boolean }>`
  display: flex;
  box-sizing: border-box;
  padding: 0.625rem;
  border-radius: 2.125rem;

  font-size: 14px;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  ${({ checked }) =>
    checked
      ? css`
          border: 0;
          background-color: ${theme.colors.main};
          color: ${theme.colors.white};
        `
      : css`
          border: 1px solid #cfc4fb;
          background-color: ${theme.colors.white};
          color: ${theme.colors.main};
        `}
`;
