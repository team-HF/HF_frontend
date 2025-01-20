import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.gray3};
  gap: 1rem;
  @media (min-width: 768px) {
    width: 19.5rem;
  }
`;
export const profileContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const Box = styled.div`
  display: flex;
  &.column {
    flex-direction: column;
  }
  &.align-items-center {
    align-items: center;
  }
  &.gap_8 {
    gap: 0.5rem;
  }
`;
export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${theme.colors.gray2};
  box-shadow: ${theme.shadows.shadow2};
`;
export const Nickname = styled.span`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.0057rem;
  font-weight: 700;
`;
export const Introduction = styled.p`
  width: 100%;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
export const MatchingCount = styled.span`
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.0096rem;
  font-weight: 600;
`;
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;
