import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DarkModeState {
  darkMode: boolean
  toggleDarkMode: () => void
  turnDarkModeOn: () => void
  turnDarkModeOff: () => void
}

export const useDarkModeStore = create<DarkModeState>()(
  persist(
    (set) => ({
      darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      turnDarkModeOn: () => set({ darkMode: true }),
      turnDarkModeOff: () => set({ darkMode: false }),
    }),
    {
      name: 'dark-mode',
    }
  )
)
