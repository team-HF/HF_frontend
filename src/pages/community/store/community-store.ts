import { create } from "zustand";
import { TCategoryId } from "../../../entities/community/contents-type-data";
import {
  TFilter,
  TLabel,
} from "../../../entities/community/filter-data";
import { useGetParams } from "../../../shared/utils/useGetParams";

type CommunityStore = {
  categorySelected: TCategoryId;
  filterSelected: TFilter;
  labelSelected: TLabel;
  setCategorySelected: (option: TCategoryId) => void;
  setFilterSelected: (option: TFilter) => void;
  setLabelSelected: (option: TLabel) => void;
};

export const useCommunityStore = create<CommunityStore>((set) => ({
  categorySelected: (useGetParams("postCategory") as TCategoryId) || "ALL",
  filterSelected: (useGetParams("fitnessLevel") as TFilter) || "ALL",
  labelSelected: useGetParams("fitnessLevel")
    ? (useGetParams("fitnessLevel") as TLabel)
    : "WEEKEND",
  setCategorySelected: (option) => set({ categorySelected: option }),
  setFilterSelected: (option) => set({ filterSelected: option }),
  setLabelSelected: (option) => set({ labelSelected: option }),
}));
