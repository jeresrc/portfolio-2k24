import {create} from "zustand";

interface CurrentSectionState {
  current: string;
  setCurrent: (current: string) => void;
}

export const useCurrentSection = create<CurrentSectionState>()((set) => ({
  current: "home",
  setCurrent: (current) => set({current}),
}));
