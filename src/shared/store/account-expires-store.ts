import { create } from "zustand";

interface accountRequireModalStore {
  expiresModalOpen: boolean;
  requireModalOpen: boolean;
  setExpiresModalOpen: (state: boolean) => void;
  setRequireModalOpen: (state: boolean) => void;
}

export const useAccountExpiresStore = create<accountRequireModalStore>(
  (set) => ({
    expiresModalOpen: false,
    requireModalOpen: false,
    setExpiresModalOpen: (state) =>
      set({
        expiresModalOpen: state,
      }),
    setRequireModalOpen: (state) =>
      set({
        requireModalOpen: state,
      }),
  })
);
