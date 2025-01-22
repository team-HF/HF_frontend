import { create } from "zustand";
import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessLevel,
  FitnessObjective,
} from "../../../shared/constants/fitness-category";

type CombinedFitnessType =
  | CompanionStyle
  | FitnessEagerness
  | FitnessObjective
  | FitnessKind;

interface SearchData {
  keyword: string;
  fitnessLevel: FitnessLevel | null;
  exerciseStyle: CombinedFitnessType[];
  cd1: string;
  cd2: string;
  cd3: string;
  setCd1: (option: string) => void;
  setCd2: (option: string) => void;
  setCd3: (option: string) => void;
}

export const searchOptionStore = create<SearchData>((set) => ({
  keyword: "",
  fitnessLevel: null,
  exerciseStyle: [],
  location: "",
  cd1: "",
  cd2: "",
  cd3: "",
  setKeyword: (option: string) => set({ keyword: option }),
  setFitnessLevel: (option: FitnessLevel) => set({ fitnessLevel: option }),
  setCd1: (option: string) => set({ cd1: option }),
  setCd2: (option: string) => set({ cd2: option }),
  setCd3: (option: string) => set({ cd3: option }),
  setLocationReset: () => set({ cd1: "", cd2: "", cd3: "" }),
}));
