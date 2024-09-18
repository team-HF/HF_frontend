import { create } from 'zustand';

type ProfileStore = {
  nickname: string | null;
  birth: string | null;
  sex: string | null;
  introduction: string | null;
  setNickname: (option: string) => void;
  setBirth: (option: string) => void;
  setSex: (option: string) => void;
  setIntroduction: (option: string) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  nickname: null,
  birth: null,
  sex: null,
  introduction: null,
  setNickname: (option) => set({ nickname: option }),
  setBirth: (option) => set({ birth: option }),
  setSex: (option) => set({ sex: option }),
  setIntroduction: (option) => set({ introduction: option }),
}));
