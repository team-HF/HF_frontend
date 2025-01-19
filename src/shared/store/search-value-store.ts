import { create } from "zustand";
import { FitnessLevel } from "../constants/fitness-category";
import { TFitnessStyle } from "../constants/fitness-style";

type SearchValue = {
  keyWord: string;
  fitnessLevel: FitnessLevel | null;
  fitnessStyle: TFitnessStyle[];
  setKeyWord: (word: string) => void;
  setFitnessLevel: (level: FitnessLevel) => void;
  setFitnessStyle: (style: TFitnessStyle) => void;
};

export const useSearchValueStore = create<SearchValue>((set) => ({
  keyWord: "",
  fitnessLevel: null,
  fitnessStyle: [],
  setKeyWord: (keyWord) => set({ keyWord: keyWord }),
  setFitnessLevel: (level) =>
    set((state) => {
      const exists = state.fitnessLevel === level;
      if (exists) {
        return {
          fitnessLevel: null,
        };
      } else {
        return {
          fitnessLevel: level,
        };
      }
    }),
  setFitnessStyle: (style) =>
    set((state) => {
      const exists = state.fitnessStyle.find((item) => item.id === style.id);
      if (exists) {
        return {
          fitnessStyle: state.fitnessStyle.filter(
            (item) => item.id !== style.id
          ),
        };
      } else {
        return {
          fitnessStyle: [...state.fitnessStyle, style],
        };
      }
    }),
}));
