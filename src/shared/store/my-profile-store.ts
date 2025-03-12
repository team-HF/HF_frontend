import { create } from "zustand";
import { MyData } from "../schema/my-data";

type UserStore = {
  myProfile: MyData | null;
  setMyProfile: (user: MyData) => void;
};

export const useMyProfileStore = create<UserStore>((set) => ({
  myProfile: null,
  setMyProfile: (myProfile) => set({ myProfile }),
}));
