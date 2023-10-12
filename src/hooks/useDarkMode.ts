import { useCallback, useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<null | boolean>(null)

  const turnOffDarkMode = useCallback(() => {
    setDarkMode(false)
    document.querySelector('html')?.classList?.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  const turnOnDarkMode = useCallback(() => {
    setDarkMode(true)
    document.querySelector('html')?.classList?.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      turnOffDarkMode()
    } else {
      turnOnDarkMode()
    }
  }

  const onWindowMatch = useCallback(() => {
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window?.matchMedia('(prefers-color-scheme: dark)').matches)
      ? turnOnDarkMode()
      : turnOffDarkMode()
  }, [turnOffDarkMode, turnOnDarkMode])

  useEffect(() => {
    setDarkMode(localStorage.theme === 'dark')
    onWindowMatch()
  }, [onWindowMatch])

  return [darkMode, toggleDarkMode]
}
