import styled from "styled-components";
import { theme } from "../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const InputContainer = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.625rem;
  border: 0;
  border-bottom: 1px solid ${theme.colors.gray3};
  background-color: ${theme.colors.white};
  gap: 0.25rem;
`;
export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
`;
export const SearchInput = styled.span`
  border: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.021rem;
  font-weight: 600;
  color: ${theme.colors.gray4};
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 0;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
