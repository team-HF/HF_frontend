import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
  getCompanionStyleText,
  getFITNESS_OBJECTIVE_MAP,
  getFitnessEagernessText,
  getFitnessKindText,
} from "../constants/fitness-category";

interface TagNameProps {
  id: string;
  content: string | undefined;
}

export const useGetTagName = (exerciseStyle: TagNameProps) => {
  if (exerciseStyle.id === "companionStyle") {
    return getCompanionStyleText(exerciseStyle.content as CompanionStyle);
  } else if (exerciseStyle.id === "fitnessEagerness") {
    return getFitnessEagernessText(exerciseStyle.content as FitnessEagerness);
  } else if (exerciseStyle.id === "fitnessKind") {
    return getFitnessKindText(exerciseStyle.content as FitnessKind);
  } else if (exerciseStyle.id === "fitnessObjective") {
    return getFITNESS_OBJECTIVE_MAP(exerciseStyle.content as FitnessObjective);
  }
};
