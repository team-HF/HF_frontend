import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
} from "./fitness-category";

export type TFitnessStyle = {
  type: string;
  id: CompanionStyle | FitnessEagerness | FitnessKind | FitnessObjective;
  content: string;
};

export const fitnessStyles: TFitnessStyle[] = [
  { type: "companionStyles", id: "SMALL", content: "소규모형" },
  { type: "companionStyles", id: "GROUP", content: "그룹형" },
  { type: "fitnessEagernesses", id: "EAGER", content: "의욕만렙형" },
  { type: "fitnessEagernesses", id: "LAZY", content: "귀차니즘형" },
  { type: "fitnessObjectives", id: "BULK_UP", content: "벌크업" },
  { type: "fitnessObjectives", id: "RUNNING", content: "러닝" },
  { type: "fitnessKinds", id: "HIGH_STRESS", content: "고강도 운동" },
  { type: "fitnessKinds", id: "FUNCTIONAL", content: "기능성 피트니스" },
];
