import styled from "styled-components";
import { theme } from "../../../app/theme";
import { TFitnessLevel } from "./PostContent";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const TagContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &.tag_container {
    padding: 0.5rem 0;
  }
`;
export const PostTypeTag = styled.span`
  display: flex;
  padding: 0.375rem;
  min-width: 3rem;
  border-radius: 1.5rem;
  font-size: 0.625rem;
  letter-spacing: -0.031rem;
  background-color: ${theme.colors.main};
  color: ${theme.colors.white};
`;
export const LikeIcon = styled.img``;
export const UnLikeICon = styled.img``;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  width: 100%;
  border-top: 1px solid #f1f3f5;
  border-bottom: 1px solid #f1f3f5;
  gap: 0.75rem;
`;
export const Title = styled.h3`
  font-size: 1.063rem;
  font-weight: 700;
  line-height: 1.412rem;
`;
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const ProfileImage = styled.img`
  background-color: #f1f3f5;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: ${theme.shadows.shadow1};
`;
export const InfoText = styled.span`
  font-size: 0.75rem;
  line-height: 1.273rem;
  letter-spacing: -0.003rem;
  color: #8e8e93;
`;
export const LevelLabel = styled.span<{ fitnessLevel: TFitnessLevel }>`
  padding: 0.125rem 0.375rem;
  border-radius: 2.125rem;
  color: ${theme.colors.white};
  background: linear-gradient(91.14deg, #6441f2 -39.38%, #1e90ff 100%);
  background: ${({ fitnessLevel }) =>
    fitnessLevel === "ADVANCED"
      ? "linear-gradient(91.14deg, #6441f2 -39.38%, #1e90ff 100%)"
      : "#00BF40"};
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
`;
export const MainContent = styled.p`
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
  color: #4d4d4d;
`;
export const IconBox = styled.div`
  display: flex;
  gap: 0.25rem;
`;
