export type FitnessLevel = "BEGINNER" | "ADVANCED";

export interface Tier {
  fitnessLevel: FitnessLevel;
  tier: number;
}

export interface User {
  memberId: number;
  loginId: string;
  role: string;
  name: string;
  email: string;
  creationTime: string;
  nickname: string;
  profileImageUrl: string | null;
  cd1: string;
  cd2: string;
  cd3: string;
  birthDate: string;
  gender: "MALE" | "FEMALE";
  introduction: string;
  companionStyle: "SMALL" | "GROUP";
  fitnessEagerness: "EAGER" | "LAZY";
  fitnessKind: "HIGH_STRESS" | "FUNCTIONAL";
  fitnessLevel: FitnessLevel;
  fitnessObjective: "BULK_UP" | "RUNNING";
  matchedCount: number;
  tier: Tier;
}

export interface Spec {
  specId: number;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  title: string;
  description: string;
}

export interface Review {
  evaluationType: "GOOD" | "NOT_GOOD";
  reviewDetailsPerEvaluationType: {
    reviewDetailId: number;
    reviewDetailCount: number;
  }[];
}
