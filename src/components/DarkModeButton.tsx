'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDarkModeStore } from '@/store/darkMode'
import { Moon, Sun } from '@/assets/svg'

function DarkModeButton() {
  const [darkModeState, setDarkModeState] = useState<boolean | null>(null)
  const [
    darkMode,
    toggleDarkMode,
    isFirstMount,
    turnDarkModeOn,
    turnDarkModeOff,
    setIsFirstMount,
  ] = useDarkModeStore((state) => [
    state.darkMode,
    state.toggleDarkMode,
    state.isFirstMount,
    state.turnDarkModeOn,
    state.turnDarkModeOff,
    state.setIsFirstMount,
  ])

  useEffect(() => {
    if (isFirstMount && darkMode == null) {
      if (window?.matchMedia('(prefers-color-scheme: dark)')?.matches)
        turnDarkModeOn()
      else turnDarkModeOff()

      setIsFirstMount(false)
    }
  }, [isFirstMount, turnDarkModeOn, turnDarkModeOff, darkMode, setIsFirstMount])

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    setDarkModeState(darkMode)
  }, [darkMode])

  return (
    <button
      onClick={toggleDarkMode}
      aria-label='toggle dark mode'
      className='flex h-full w-full cursor-pointer items-center justify-center'
    >
      <motion.div
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        whileTap={{ rotate: 180, scale: 0.6 }}
        className='h-6 w-6 fill-black dark:fill-white'
      >
        {darkModeState ? <Moon /> : <Sun />}
      </motion.div>
    </button>
  )
}

export default DarkModeButton
