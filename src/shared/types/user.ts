import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessLevel,
  FitnessObjective,
} from "../constants/fitness-category";

export interface Tier {
  fitnessLevel: FitnessLevel;
  tier: number;
}

export interface Location {
  y_coor: string;
  full_addr: string;
  x_coor: string;
  addr_name: string;
  cd: string;
}

export interface MyProfile {
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
  companionStyle: CompanionStyle;
  fitnessEagerness: FitnessEagerness;
  fitnessKind: FitnessKind;
  fitnessLevel: FitnessLevel;
  fitnessObjective: FitnessObjective;
  matchedCount: number;
  tier: Tier;
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
  companionStyle: CompanionStyle;
  fitnessEagerness: FitnessEagerness;
  fitnessKind: FitnessKind;
  fitnessLevel: FitnessLevel;
  fitnessObjective: FitnessObjective;
  matchedCount: number;
  tier: Tier;
  wishCount: number;
  reviewScore: number;
  isWished: boolean;
}

export interface Spec {
  specId: number;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  title: string;
  description: string;
}

export interface ReviewCard {
  reviewDetailId: number;
  reviewDetailCount: number;
}

export interface Review {
  good: ReviewCard[];
  notGood: ReviewCard[];
}
