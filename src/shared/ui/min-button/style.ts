import styled, { css } from "styled-components";
import { minButtonProps } from "./MinButton";

type buttonProps = Pick<minButtonProps, "button_shape" | "button_style">;

export const Container = styled.button<buttonProps>`
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  border: 0px;
  border-radius: ${(props) => (props.button_shape === "square" ? "4px" : "34px")};
  ${(props) =>
    props.button_style === "style_1" &&
    css`
      background-color: #f0f0f0;
      color: #8e8e8e;
    `}
  ${(props) =>
    props.button_style === "style_2" &&
    css`
      background-color: white;
      color: #1d1d1d;
    `}
    ${(props) =>
    props.button_style === "style_3" &&
    css`
      background-color: white;
      color: #8e8e8e;
      border: 1px solid #f3e9f3;
    `}
    ${(props) =>
    props.button_style === "style_4" &&
    css`
      background-color: #6541f2;
      color: white;
    `}
    ${(props) =>
    props.button_style === "style_5" &&
    css`
      background-color: #f0ecfe;
      color: #6541f2;
      border: 1px solid #6541f2;
    `}
    ${(props) =>
    props.button_style === "style_6" &&
    css`
      background-color: white;
      color: #6541f2;
      border: 1px solid #cfc4fb;
    `}
`;
