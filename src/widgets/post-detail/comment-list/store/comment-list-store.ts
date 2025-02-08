import { create } from "zustand";
import { TComment } from "../../../../shared/types/community";

type UserStore = {
  commentDataList: TComment[] | null;
  setCommentDataList: (option: TComment[]) => void;
};

export const useCommentListStore = create<UserStore>((set) => ({
  commentDataList: null,
  setCommentDataList: (option) => set({ commentDataList: option }),
}));
