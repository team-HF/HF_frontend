import { create } from "zustand";
import { User } from "../types/user";

type UserStore = {
  userProfile: User | null;
  setUserProfile: (user: User) => void;
};

export const useUserProfileStore = create<UserStore>((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
}));
