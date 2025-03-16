import { create } from "zustand";

interface loadingStore {
  isLoading: boolean;
  setIsLoading: (option: boolean) => void;
}

export const useLoadingStore = create<loadingStore>((set) => ({
  isLoading: false,
  setIsLoading: (option) =>
    set({
      isLoading: option,
    }),
}));
