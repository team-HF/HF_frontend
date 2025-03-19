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
  nickname: string;
  lastValidatedNickname: string;
  dateYear: string | null;
  dateMonth: string | null;
  dateDay: string | null;
  gender: string;
  cd1: string;
  cd2: string;
  cd3: string;
  introduction: string;
  specs: TSpec[];
  setImage: (option: File) => void;
  setNickname: (option: string) => void;
  setLastValidatedNickname: (option: string) => void;
  setDateYear: (option: string) => void;
  setDateMonth: (option: string) => void;
  setDateDay: (option: string) => void;
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
  nickname: "",
  lastValidatedNickname: "",
  dateYear: null,
  dateMonth: null,
  dateDay: null,
  gender: "",
  cd1: "",
  cd2: "",
  cd3: "",
  introduction: "",
  specs: [],
  setImage: (option) => set({ image: option }),
  setNickname: (option) => set({ nickname: option }),
  setLastValidatedNickname: (option) => set({ lastValidatedNickname: option }),
  setDateYear: (option) => set({ dateYear: option }),
  setDateMonth: (option) => set({ dateMonth: option }),
  setDateDay: (option) => set({ dateDay: option }),
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
