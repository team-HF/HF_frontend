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
export const Box = styled.div`
  display: flex;
  &.search_bar {
    align-items: center;
    padding: 0.25rem 0;
  }
  &.search_result_title {
    padding: 1rem 0 0.5rem 0;
  }
  &.column {
    flex-direction: column;
  }
  &.space_between {
    justify-content: space-between;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
  &.gap_16 {
    gap: 1rem;
  }
  &.gap_32 {
    gap: 2rem;
  }
`;
export const IconBtn = styled.button`
  background-color: white;
  border: 0;
  width: 1.5rem;
  height: 1.5rem;
`;
export const ArrowIcon = styled.img<{ src: string }>`
  &.back {
    transform: rotate(90deg);
  }
  &.front {
    transform: rotate(270deg);
    width: 1rem;
    height: 1rem;
    color: ${theme.colors.gray4};
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
export const SearchInput = styled.span<{ value: string }>`
  border: 0;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.021rem;
  font-weight: 600;
  color: ${({ value }) => (value ? "black" : theme.colors.gray4)};
`;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ResultTile = styled.span`
  font-size: 1.063rem;
  line-height: 1.412rem;
  font-weight: 700;
  &.count {
    color: ${theme.colors.main};
  }
`;
export const ShowAllBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  color: ${theme.colors.gray4};
  background-color: ${theme.colors.white};
`;
export const EmptyList = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${theme.colors.gray3};
  border-radius: 0.5rem;
  height: 200px;
  font-size: 0.875rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  color: ${theme.colors.gray4};
`;
