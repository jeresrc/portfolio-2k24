'use client'
import { motion } from 'framer-motion'
import Sun from '@/assets/svg/sun.svg'
import Moon from '@/assets/svg/moon.svg'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDarkModeStore } from '@/store/darkMode'

const AnimatedSvg = motion(Image)

function DarkModeButton() {
  const [darkMode, toggleDarkMode] = useDarkModeStore((state) => [
    state.darkMode,
    state.toggleDarkMode,
  ])

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
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
      >
        <AnimatedSvg
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
