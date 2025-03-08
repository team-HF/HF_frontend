import { create } from "zustand";

interface accountRequireModalStore {
  expiresModalOpen: boolean;
  setExpiresModalOpen: (state: boolean) => void;
}

export const useAccountExpiresStore = create<accountRequireModalStore>(
  (set) => ({
    expiresModalOpen: false,
    setExpiresModalOpen: (state) => set({ expiresModalOpen: state }),
  })
);
