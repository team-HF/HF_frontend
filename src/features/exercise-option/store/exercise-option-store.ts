import { create } from 'zustand';

type OptionStore = {
  levelSelected: string | null;
  styleSelected: string | null;
  habitSelected: string | null;
  goalSelected: string | null;
  exerciseSelected: string | null;
  setLevelSelected: (option: string) => void;
  setStyleSelected: (option: string) => void;
  setHabitSelected: (option: string) => void;
  setGoalSelected: (option: string) => void;
  setExerciseSelected: (option: string) => void;
};

export const useOptionStore = create<OptionStore>((set) => ({
  levelSelected: null,
  styleSelected: null,
  habitSelected: null,
  goalSelected: null,
  exerciseSelected: null,
  setLevelSelected: (option) => set({ levelSelected: option }),
  setStyleSelected: (option) => set({ styleSelected: option }),
  setHabitSelected: (option) => set({ habitSelected: option }),
  setGoalSelected: (option) => set({ goalSelected: option }),
  setExerciseSelected: (option) => set({ exerciseSelected: option }),
}));
