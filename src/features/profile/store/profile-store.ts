import { create } from "zustand";

type ProfileStore = {
  image: File | null;
  nickname: string | null;
  birth: string | null;
  sex: string | null;
  cd1: string | null;
  cd2: string | null;
  cd3: string | null;
  introduction: string | null;
  setImage: (option: File | null) => void;
  setNickname: (option: string) => void;
  setBirth: (option: string) => void;
  setSex: (option: string) => void;
  setCd1: (option: string) => void;
  setCd2: (option: string) => void;
  setCd3: (option: string) => void;
  setIntroduction: (option: string) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  image: null,
  nickname: null,
  birth: null,
  sex: null,
  cd1: null,
  cd2: null,
  cd3: null,
  introduction: null,
  setImage: (option) => set({ image: option }),
  setNickname: (option) => set({ nickname: option }),
  setBirth: (option) => set({ birth: option }),
  setSex: (option) => set({ sex: option }),
  setCd1: (option) => set({ cd1: option }),
  setCd2: (option) => set({ cd2: option }),
  setCd3: (option) => set({ cd3: option }),
  setIntroduction: (option) => set({ introduction: option }),
}));
