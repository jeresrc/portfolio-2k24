import {create} from 'zustand'

interface currentSectionState {
  current: string
  setCurrent: (current: string) => void
}

export const useCurrentSection = create<currentSectionState>()((set) => ({
  current: 'home',
  setCurrent: (current) => set({current}),
}))
