import styled from "styled-components";
import { theme } from "../../../app/theme";

interface ExerciseTag {
  tag: string | undefined;
}

const ExerciseTag = ({ tag }: ExerciseTag) => {
  return <Tag>{`# ${tag}`}</Tag>;
};

export default ExerciseTag;

const Tag = styled.span`
  display: flex;
  align-items: center;
  padding: 0.375rem 0.5rem;
  height: 1.5rem;
  border: 1px solid #cfc4fb;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: -0.031rem;
  font-weight: 400;
  color: ${theme.colors.main};
`;
