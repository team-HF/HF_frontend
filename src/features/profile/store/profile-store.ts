import { create } from "zustand";

export type TSpecItem = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type TSpec = {
  specId: number;
  spec: TSpecItem;
};

type ProfileStore = {
  image: File | null;
  nickname: string | null;
  birthDate: string | null;
  gender: string | null;
  cd1: string | null;
  cd2: string | null;
  cd3: string | null;
  introduction: string | null;
  specs: TSpec[];
  setImage: (option: File | null) => void;
  setNickname: (option: string) => void;
  setBirthDate: (option: string) => void;
  setGender: (option: string) => void;
  setCd1: (option: string) => void;
  setCd2: (option: string) => void;
  setCd3: (option: string) => void;
  setIntroduction: (option: string) => void;
  setAddNewSpec: () => void;
  setUpdateSpec: (option: TSpec[]) => void;
};

export const useProfileStore = create<ProfileStore>((set) => ({
  image: null,
  nickname: null,
  birthDate: null,
  gender: null,
  cd1: null,
  cd2: null,
  cd3: null,
  introduction: null,
  specs: [],
  setImage: (option) => set({ image: option }),
  setNickname: (option) => set({ nickname: option }),
  setBirthDate: (option) => set({ birthDate: option }),
  setGender: (option) => set({ gender: option }),
  setCd1: (option) => set({ cd1: option }),
  setCd2: (option) => set({ cd2: option }),
  setCd3: (option) => set({ cd3: option }),
  setIntroduction: (option) => set({ introduction: option }),
  setAddNewSpec: () =>
    set((state) => ({
      specs: [
        ...state.specs,
        {
          specId: state.specs.length,
          spec: {
            title: "",
            description: "",
            startDate: "",
            endDate: "",
          },
        },
      ],
    })),
  setUpdateSpec: (option) => set({ specs: option }),
}));
