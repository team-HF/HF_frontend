import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 40rem;
    padding: 0.5rem 0;
  }
`;
export const DoneBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 1.25rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.5rem 0;
  }
`;
export const DoneBtn = styled.button`
  padding: 0.625rem;
  border: 0;
  background-color: ${theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: -0.01rem;
`;
export const PostCategoryBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.25rem;
  border: 0;
  border-bottom: 1px solid #ededed;
  background-color: ${theme.colors.white};
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.5rem 0;
  }
`;
export const CategoryBtnText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.75rem;
  letter-spacing: -0.01rem;
  color: #4d4d4d;
`;
export const ArrowIcon = styled.img`
  transform: rotate(270deg);
`;
export const AlertContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 1.25rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.5rem 0;
  }
`;
export const AlertText = styled.span`
  font-size: 0.688rem;
  color: #868e96;
  line-height: 1.273rem;
  letter-spacing: -0.003rem;
`;
export const InputContainer = styled.div`
  padding: 0.5rem 1.25rem;
  @media (min-width: 768px) and (max-width: 1919px) {
    padding: 0.5rem 0;
  }
`;
export const TitleInput = styled.input`
  padding: 0.625rem;
  width: 100%;
  border: 1px solid #ededed;
  background-color: #f8f8f8;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.019rem;
  border-radius: 0.5rem;
  &::-webkit-input-placeholder {
    color: #8e8e93;
  }
  &::selection {
    color: #1d1d1d;
    background-color: ${theme.colors.sub};
  }
`;
export const ContentInput = styled.textarea`
  padding: 0.625rem;
  width: 100%;
  height: 12.5rem;
  border: 1px solid #ededed;
  background-color: #f8f8f8;
  outline: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  letter-spacing: 0.019rem;
  border-radius: 0.5rem;
  resize : none;
  &::-webkit-input-placeholder {
    color: #8e8e93;
  }
  &::selection {
    color: #1d1d1d;
    background-color: ${theme.colors.sub};
  }
`;
