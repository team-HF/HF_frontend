import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &.padding_8 {
    padding: 0.5rem 0;
  }
  &.padding_24 {
    padding: 1.5rem 0;
  }
  &.gap_2 {
    gap: 0.125rem;
  }
  &.gap_4 {
    gap: 0.5rem;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
  &.gap_12 {
    gap: 0.75rem;
  }
  &.column {
    flex-direction: column;
  }
  &.exerciseTagList {
    flex-wrap: wrap;
  }
`;
export const UserImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  box-shadow: ${theme.shadows.shadow2};
  background-color: ${theme.colors.gray2};
`;
export const Text_1 = styled.span`
  font-size: 1.125rem;
  line-height: 1.445rem;
  letter-spacing: -0.002rem;
  font-weight: 600;
`;
export const Text_2 = styled.span`
  font-size: 0.875rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  font-weight: 400;
`;
export const SummaryBox = styled.div`
  display: flex;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background-color: ${theme.colors.gray1};
`;
export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  &.middle {
    border-left: 1px solid ${theme.colors.gray3};
    border-right: 1px solid ${theme.colors.gray3};
  }
`;
export const SignUpBtn = styled.button`
  padding: 1rem 1.25rem;
  flex: 1;
  border: 0;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: -0.0031rem;
  font-weight: 500;
  color: ${theme.colors.white};
  background-color: ${theme.colors.main};
`;
export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid ${theme.colors.gray3};
  border-radius: 0.5rem;
  background-color: ${theme.colors.white};
`;
export const Introduction = styled.p`
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
`;
