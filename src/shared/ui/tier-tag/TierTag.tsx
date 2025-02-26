import styled from "styled-components";
import { theme } from "../../../app/theme";
import {  Tier } from "../../types/user";
import { FitnessLevel } from "../../constants/fitness-category";

const TierTag = ({ fitnessLevel, tier }: Tier) => {
  return <Tag $fitnessLevel={fitnessLevel}>{`Lv. ${tier}`}</Tag>;
};

export default TierTag;

const Tag = styled.span<{ $fitnessLevel: FitnessLevel }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 1.25rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  font-weight: 400;
  color: ${theme.colors.white};
  background: ${(props) =>
    props.$fitnessLevel === "ADVANCED"
      ? theme.colors.linear
      : theme.colors.beginner_linear};
`;
