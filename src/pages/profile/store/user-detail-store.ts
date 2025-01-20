import { create } from "zustand";
import { Review, Spec } from "../../../shared/types/user";

interface SpecReview {
  specs: Spec[];
  reviews: Review;
  averageReviewScore: number;
  matchingCount: number;
  reviewCount: number;
  wishedCount: number;
}

interface UserData {
  userDetail: SpecReview;
  setUserDetail: (option: SpecReview) => void;
}

export const useUserDetailStore = create<UserData>((set) => ({
  userDetail: {
    specs: [],
    reviews: { good: [], notGood: [] },
    averageReviewScore: 0,
    matchingCount: 0,
    reviewCount: 0,
    wishedCount: 0,
  },
  setUserDetail: (myProfile) => set({ userDetail: myProfile }),
}));
