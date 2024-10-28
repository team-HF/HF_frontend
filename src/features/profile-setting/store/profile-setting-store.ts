import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileSettingStore = {
  image: File | null;
  setImage: (option: File) => void;
  introduction: string | null;
  setIntroduction: (option: string) => void;
  nickname: string | null;
  setNickname: (option: string) => void;
  birth: string | null;
  setBirth: (option: string) => void;
  gender: string | null;
  setGender: (option: string) => void;
};

export const useProfileSettingStore = create(
  persist<ProfileSettingStore>(
    (set) => ({
      image: null,
      setImage: (option) => set({ image: option }),
      introduction: null,
      setIntroduction: (option) => set({ introduction: option }),
      nickname: null,
      setNickname: (option) => set({ nickname: option }),
      birth: null,
      setBirth: (option) => set({ birth: option }),
      gender: null,
      setGender: (option) => set({ gender: option }),
    }),
    {
      name: 'profile-settings',
      getStorage: () => sessionStorage,
    }
  )
);
