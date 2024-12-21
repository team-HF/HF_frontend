import { create } from "zustand";

type Tier = {
  fitnessLevel: string;
  tier: number;
};

type myInfo = {
  memberId: number;
  loginId: string;
  role: string;
  name: string;
  email: string;
  creationTime: string;
  nickname: string;
  profileImageUrl: string;
  cd1: string;
  cd2: string;
  cd3: string;
  birthDate: string;
  gender: string;
  introduction: string;
  fitnessLevel: string;
  companionStyle: string;
  fitnessEagerness: string;
  fitnessObjective: string;
  fitnessKind: string;
  matchedCount: number;
  tier: Tier;
};

type UserStore = {
  myProfile: myInfo | null;
  setMyProfile: (user: myInfo) => void;
};

export const useMyProfileStore = create<UserStore>((set) => ({
  myProfile: null,
  setMyProfile: (myProfile) => set({ myProfile }),
}));
