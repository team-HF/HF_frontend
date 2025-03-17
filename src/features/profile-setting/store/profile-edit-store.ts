import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileEditStore = {
  image: File | null;
  setImage: (option: File | null) => void;

  introduction: string | null;
  setIntroduction: (option: string | null) => void;
  nickname: string | null;
  setNickname: (option: string | null) => void;

  specs: string | null;
  setSpecs: (option: string) => void;

  cd1: string | null;
  setCd1: (option: string | null) => void;
  cd2: string | null;
  setCd2: (option: string | null) => void;
  cd3: string | null;
  setCd3: (option: string | null) => void;

  styleSelected: 'SMALL' | 'GROUP' | null;
  habitSelected: 'EAGER' | 'LAZY' | null;
  goalSelected: 'BULK_UP' | 'RUNNING' | null;
  exerciseSelected: 'HIGH_STRESS' | 'FUNCTIONAL' | null;

  setStyleSelected: (option: string) => void;
  setHabitSelected: (option: string) => void;
  setGoalSelected: (option: string) => void;
  setExerciseSelected: (option: string) => void;

  reset: () => void;
};

export const useProfileEditStore = create(
  persist<ProfileEditStore>(
    (set) => ({
      image: null,
      setImage: (option) => set({ image: option }),

      introduction: null,
      setIntroduction: (option) => set({ introduction: option }),
      nickname: null,
      setNickname: (option) => set({ nickname: option }),

      specs: null,
      setSpecs: (option) => set({ specs: option }),

      cd1: null,
      setCd1: (option) => set({ cd1: option }),
      cd2: null,
      setCd2: (option) => set({ cd2: option }),
      cd3: null,
      setCd3: (option) => set({ cd3: option }),

      styleSelected: null,
      habitSelected: null,
      goalSelected: null,
      exerciseSelected: null,

      setStyleSelected: (option) => {
        if (option === 'SMALL' || option === 'GROUP') {
          set({ styleSelected: option });
        } else {
          console.error(`Invalid styleSelected option: ${option}`);
        }
      },
      setHabitSelected: (option) => {
        if (option === 'EAGER' || option === 'LAZY') {
          set({ habitSelected: option });
        } else {
          console.error(`Invalid habitSelected option: ${option}`);
        }
      },
      setGoalSelected: (option) => {
        if (option === 'BULK_UP' || option === 'RUNNING') {
          set({ goalSelected: option });
        } else {
          console.error(`Invalid goalSelected option: ${option}`);
        }
      },
      setExerciseSelected: (option) => {
        if (option === 'HIGH_STRESS' || option === 'FUNCTIONAL') {
          set({ exerciseSelected: option });
        } else {
          console.error(`Invalid exerciseSelected option: ${option}`);
        }
      },
      reset: () => {
        set({
          image: null,
          introduction: null,
          nickname: null,
          specs: null,
          cd1: null,
          cd2: null,
          cd3: null,
          styleSelected: null,
          habitSelected: null,
          goalSelected: null,
          exerciseSelected: null,
        });
      },
    }),
    {
      name: 'profile-edit-store',
    }
  )
);
