import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DarkModeState {
  darkMode: boolean | null
  isFirstMount: boolean
  setIsFirstMount: (state: boolean) => void
  toggleDarkMode: () => void
  turnDarkModeOn: () => void
  turnDarkModeOff: () => void
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      darkMode: null,
      isFirstMount: true,
      setIsFirstMount: (state) => set({ isFirstMount: state }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      turnDarkModeOn: () => set({ darkMode: true }),
      turnDarkModeOff: () => set({ darkMode: false }),
    }),
    {
      name: 'dark-mode',
    }
  )
)
