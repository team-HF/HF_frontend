export interface User {
  memberId: number;
  loginId: string;
  role: string;
  name: string;
  email: string;
  birthDate: string;
  cd1: string;
  cd2: string;
  cd3: string;
  companionStyle: "SMALL" | "GROUP";
  creationTime: string;
  fitnessEagerness: "EAGER" | "LAZY";
  fitnessKind: "HIGH_STRESS" | "FUNCTIONAL";
  fitnessLevel: "BEGINNER" | "ADVANCED";
  fitnessObjective: "BULK_UP" | "RUNNING";
  gender: "MALE" | "FEMALE";
  introduction: string;
  matchedCount: number;
  nickname: string;
  profileImageUrl: string | null;
  tier: {
    fitnessLevel: string;
    tier: number;
  };
}
