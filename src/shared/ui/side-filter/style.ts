import styled, { css } from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div<{ open: boolean }>`
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.5rem;
  padding: 0.625rem 0 1.25rem 0;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${theme.colors.white};
  box-shadow: 0.625rem 0px 1.5rem rgba(0, 0, 0, 0.1);
  z-index: 1;
  @media (min-width: 768px) {
    width: 48rem;
  }
`;
export const Divider_1 = styled.hr`
  width: 2.875rem;
  height: 0.125rem;
  border: 0;
  border-radius: 0.125rem;
  background-color: #d9d9d9;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.25rem;
  width: 100%;
`;
export const Title = styled.span`
  width: 100%;
  padding: 0.625rem 0 1rem 0;
  font-size: 1.063rem;
  font-weight: 700;
  line-height: 1.412rem;
  color: #212529;
  border-bottom: 0.063rem solid #ededed;
`;
export const FiltersBox = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.625rem 0;
`;
export const Filter = styled.button<{ checked: boolean }>`
  padding: 0.625rem;
  border: 0;
  border-radius: 2.125rem;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: -0.01rem;
  ${({ checked }) =>
    checked
      ? css`
          background-color: ${theme.colors.main};
          color: ${theme.colors.white};
        `
      : css`
          border: 0.063rem solid #cfc4fb;
          background-color: ${theme.colors.white};
          color: ${theme.colors.main};
        `}
`;
export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
`;
export const ResetBtnContainer = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  width: 6.813rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
  box-shadow: 0 0.063rem 0.125rem rgba(0, 0, 0, 0.15);
`;
export const ResetText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  color: #868e96;
`;
export const DoneBtn = styled.button`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.25rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #6541f2;
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.031rem;
`;
