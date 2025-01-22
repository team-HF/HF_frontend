import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0;
`;
export const InputContainer = styled.form`
  width: 100%;
  display: flex;
  padding: 0.625rem;
  border-bottom: 1px solid ${theme.colors.gray3};
  gap: 0.25rem;
`;
export const IconBtn = styled.button`
  background-color: white;
  border: 0;
  width: 1.5rem;
  height: 1.5rem;
`;
export const ArrowIcon = styled.img<{ src: string }>`
  transform: rotate(90deg);
`;
export const SearchIcon = styled.img``;
export const SearchInput = styled.input`
  border: 0;
  flex: 1;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.021rem;
  font-weight: 600;
  &::placeholder {
    color: ${theme.colors.gray4};
  }
  &:focus {
    outline: none;
  }
`;
