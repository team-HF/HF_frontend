import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
} from "./fitness-category";

export type TFitnessStyle = {
  id: CompanionStyle | FitnessEagerness | FitnessKind | FitnessObjective;
  content: string;
};

export const fitnessStyles: TFitnessStyle[] = [
  { id: "SMALL", content: "소규모형" },
  { id: "GROUP", content: "그룹형" },
  { id: "EAGER", content: "의욕만렙형" },
  { id: "LAZY", content: "귀차니즘형" },
  { id: "BULK_UP", content: "벌크업" },
  { id: "RUNNING", content: "러닝" },
  { id: "HIGH_STRESS", content: "고강도 운동" },
  { id: "FUNCTIONAL", content: "기능성 피트니스" },
];
