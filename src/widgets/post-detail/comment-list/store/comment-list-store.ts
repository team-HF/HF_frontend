import { create } from "zustand";
import { Comment } from "../CommentList";

type UserStore = {
  commentDataList: Comment[] | null;
  setCommentDataList: (option: Comment[]) => void;
};

export const useCommentListStore = create<UserStore>((set) => ({
  commentDataList: null,
  setCommentDataList: (option) => set({ commentDataList: option }),
}));
