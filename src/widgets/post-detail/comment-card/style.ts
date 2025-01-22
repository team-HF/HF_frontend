import styled, { css } from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f3f5;
`;
export const InfoBox_1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const profileBox = styled.div`
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
export const LevelLabel = styled.span<{ $fitnessLevel: boolean }>`
  padding: 0.125rem 0.375rem;
  border-radius: 2.125rem;
  color: ${theme.colors.white};
  background: ${({ $fitnessLevel }) =>
    $fitnessLevel
      ? "linear-gradient(91.14deg, #6441f2 -39.38%, #1e90ff 100%)"
      : "#00BF40"};
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
`;
export const InfoText = styled.span`
  font-size: 0.75rem;
  line-height: 1.273rem;
  letter-spacing: -0.003rem;
  color: #8e8e93;
`;
export const CommentBox = styled.div`
  padding: 1rem 0;
`;
export const Comment = styled.span`
  padding: 1rem 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
  color: #4d4d4d;
  &.mention {
    color: ${theme.colors.sub};
  }
`;

export const CommentButton = styled.button`
  border: 0;
  font-size: 0.75rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  color: ${theme.colors.sub};
  background-color: ${theme.colors.white};
`;
export const FavoriteBtn = styled.img<{ $fill: boolean }>`
  ${({ $fill }) =>
    $fill &&
    css`
      filter: invert(24%) sepia(91%) saturate(7435%) hue-rotate(323deg)
        brightness(97%) contrast(107%);
    `}
`;
export const InputContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  gap: 0.5rem;
`;
export const ReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  width: 100%;
  border-top: 1px solid #f1f3f5;
`;
export const UpdateBox = styled.div`
  padding: 0.5rem 0;
`;
export const Button = styled.button`
  border: 0;
  font-size: 0.75rem;
  line-height: 1.334rem;
  letter-spacing: -0.0025rem;
  color: #adb5bd;
  background-color: white;
`;
