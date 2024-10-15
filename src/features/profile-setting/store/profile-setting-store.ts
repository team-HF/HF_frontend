import { create } from 'zustand';

type ProfileSettingStore = {
  introduction: string | null;
  setIntroduction: (option: string) => void;
};

export const useProfileSettingStore = create<ProfileSettingStore>((set) => ({
  introduction: null,
  setIntroduction: (option) => set({ introduction: option }),
}));
