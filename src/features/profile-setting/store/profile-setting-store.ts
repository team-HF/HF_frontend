import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProfileSettingStore = {
  image: File | null;
  setImage: (option: File) => void;

  introduction: string | null;
  setIntroduction: (option: string) => void;
  nickname: string | null;
  setNickname: (option: string) => void;

  specs: string | null;
  setSpecs: (option: string) => void;

  cd1: string | null;
  setCd1: (option: string) => void;
  cd2: string | null;
  setCd2: (option: string) => void;
  cd3: string | null;
  setCd3: (option: string) => void;
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

      specs: null,
      setSpecs: (option) => set({ specs: option }),
      cd1: null,
      setCd1: (option) => set({ cd1: option }),

      cd2: null,
      setCd2: (option) => set({ cd2: option }),

      cd3: null,
      setCd3: (option) => set({ cd3: option }),
    }),

    {
      name: 'profile-settings',
      getStorage: () => sessionStorage,
    }
  )
);
