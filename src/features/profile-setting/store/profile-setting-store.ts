import { create } from 'zustand';

type ProfileSettingStore = {
  introduction: string | null;
  setIntroduction: (option: string) => void;
  nickname: string | null;
  setNickname: (option: string) => void;
  birth: string | null;
  setBirth: (option: string) => void;
  gender: string | null;
  setGender: (option: string) => void;
};

export const useProfileSettingStore = create<ProfileSettingStore>((set) => ({
  introduction: null,
  setIntroduction: (option) => set({ introduction: option }),
  nickname: null,
  setNickname: (option) => set({ nickname: option }),
  birth: null,
  setBirth: (option) => set({ birth: option }),
  gender: null,
  setGender: (option) => set({ gender: option }),
}));
