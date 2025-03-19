import styled from "styled-components";
import { theme } from "../../../app/theme";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
export const CommentInput = styled.textarea`
  box-sizing: border-box;
  border: 1px solid #ededed;
  border-radius: 0.5rem;
  padding: 0.625rem;
  padding-right: 1.75rem;
  background-color: #f8f8f8;
  color: #4d4d4d;
  outline: none;
  width: 100%;
  height: 5rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.019rem;
  resize: none;
  &::-webkit-input-placeholder {
    color: #8e8e93;
  }
  &::selection {
    color: #4d4d4d;
    background-color: ${theme.colors.sub};
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SendBtn = styled.button`
  position: absolute;
  right: 0.625rem;
  top: 35%;
  background-image: url("/svg/send-icon.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f8f8f8;
  width: 18px;
  height: 18px;
  border: none;

  cursor: pointer;
`;
