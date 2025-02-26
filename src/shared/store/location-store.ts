import { create } from "zustand";

const params = new URLSearchParams(window.location.search);

type LocationStore = {
  cd1: string | null;
  cd2: string | null;
  cd3: string | null;
  setCd1: (cd1: string | null) => void;
  setCd2: (cd2: string | null) => void;
  setCd3: (cd3: string | null) => void;
  reset: () => void;
};

export const useLocationStore = create<LocationStore>((set) => ({
  cd1: params.get("cd1") ? params.get("cd1") : null,
  cd2: params.get("cd2") ? `${params.get("cd1")}${params.get("cd2")}` : null,
  cd3: params.get("cd3")
    ? `${params.get("cd1")}${params.get("cd2")}${params.get("cd3")}`
    : null,
  setCd1: (cd1) => set({ cd1: cd1 }),
  setCd2: (cd2) => set({ cd2: cd2 }),
  setCd3: (cd3) => set({ cd3: cd3 }),
  reset: () => set({ cd1: "", cd2: "", cd3: "" }),
}));
