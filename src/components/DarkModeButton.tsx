'use client'
import { motion } from 'framer-motion'
import Sun from '@/assets/svg/sun.svg'
import Moon from '@/assets/svg/moon.svg'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDarkModeStore } from '@/store/darkMode'

function DarkModeButton() {
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
  }, [darkMode])

  return (
    <button
      onClick={toggleDarkMode}
      aria-label='toggle dark mode'
      className='flex h-full w-full cursor-pointer items-center justify-center text-white'
    >
      <motion.div
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        whileTap={{ rotate: 180, scale: 0.6 }}
      >
        <Image
          src={darkMode ? Moon : Sun}
          alt='toggle dark mode'
          width={24}
          height={24}
        />
      </motion.div>
    </button>
  )
}

export default DarkModeButton
