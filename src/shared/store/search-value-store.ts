import { create } from "zustand";
import { FitnessLevel } from "../constants/fitness-category";
import { TFitnessStyle } from "../constants/fitness-style";
import { useStoreQueryParam } from "../../widgets/profile-search/search-modal/useStoreQueryParam";

type SearchValue = {
  keyword: string;
  fitnessLevels: FitnessLevel | null;
  fitnessStyle: TFitnessStyle[];
  setKeyWord: (word: string) => void;
  setFitnessLevel: (level: FitnessLevel) => void;
  setFitnessStyle: (style: TFitnessStyle) => void;
};

const params = new URLSearchParams(window.location.search);

export const useSearchValueStore = create<SearchValue>((set) => ({
  keyword: params.get("keyword") || "",
  fitnessLevels: params.get("fitnessLevels") as FitnessLevel | null,
  fitnessStyle: useStoreQueryParam(),
  setKeyWord: (keyWord) => set({ keyword: keyWord }),
  setFitnessLevel: (level) =>
    set((state) => {
      const exists = state.fitnessLevels === level;
      if (exists) {
        return {
          fitnessLevels: null,
        };
      } else {
        return {
          fitnessLevels: level,
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
