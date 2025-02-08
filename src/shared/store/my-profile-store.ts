import { create } from "zustand";
import { User } from "../types/user";

type UserStore = {
  myProfile: User | null;
  setMyProfile: (user: User) => void;
};

export const useMyProfileStore = create<UserStore>((set) => ({
  myProfile: null,
  setMyProfile: (myProfile) => set({ myProfile }),
}));
