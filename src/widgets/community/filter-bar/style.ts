import styled, { css } from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
  width: 100%;
`;
export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;
export const LabelBtn = styled.button<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  padding: 0 0.625rem;
  height: 2.125rem;
  border-radius: 2.125rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  cursor: pointer;
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
