import { create } from "zustand";
import { Review, Spec } from "../../../shared/types/user";

interface SpecReview {
  specs: Spec[];
  reviews: Review[];
}

interface UserData {
  userDetail: SpecReview | null;
  setUserDetail: (option: SpecReview) => void;
}

export const useUserDetailStore = create<UserData>((set) => ({
  userDetail: null,
  setUserDetail: (myProfile) => set({ userDetail: myProfile }),
}));
