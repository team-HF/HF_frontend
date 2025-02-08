import { create } from "zustand";
import { useGetParams } from "../../../shared/utils/useGetParams";

type OptionStore = {
  styleSelected: string | null;
  habitSelected: string | null;
  goalSelected: string | null;
  exerciseSelected: string | null;
  setStyleSelected: (option: string) => void;
  setHabitSelected: (option: string) => void;
  setGoalSelected: (option: string) => void;
  setExerciseSelected: (option: string) => void;
};

export const useOptionStore = create<OptionStore>((set) => ({
  styleSelected: useGetParams("companionStyle"),
  habitSelected: useGetParams("fitnessEagerness"),
  goalSelected: useGetParams("fitnessObjective"),
  exerciseSelected: useGetParams("fitnessKind"),
  setStyleSelected: (option) => set({ styleSelected: option }),
  setHabitSelected: (option) => set({ habitSelected: option }),
  setGoalSelected: (option) => set({ goalSelected: option }),
  setExerciseSelected: (option) => set({ exerciseSelected: option }),
}));

type LevelStore = {
  levelSelected: string | null;
  setLevelSelected: (option: string) => void;
};

export const useLevelStore = create<LevelStore>((set) => ({
  levelSelected: null,
  setLevelSelected: (option) => set({ levelSelected: option }),
}));
