import { create } from "zustand";

type LocationStore = {
  cd1: string;
  cd2: string;
  cd3: string;
  setCd1: (cd1: string) => void;
  setCd2: (cd2: string) => void;
  setCd3: (cd3: string) => void;
  reset: () => void;
};

export const useLocationStore = create<LocationStore>((set) => ({
  cd1: "",
  cd2: "",
  cd3: "",
  setCd1: (cd1) => set({ cd1: cd1 }),
  setCd2: (cd2) => set({ cd2: cd2 }),
  setCd3: (cd3) => set({ cd3: cd3 }),
  reset: () => set({ cd1: "", cd2: "", cd3: "" }),
}));
