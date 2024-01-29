'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { Moon, Sun } from '@/assets/svg'
import { useTheme } from 'next-themes'

export function DarkModeButton() {
  const { setTheme, theme } = useTheme()

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleDarkMode}
      aria-label='toggle dark mode'
      className='flex h-full w-full cursor-pointer items-center justify-center'
    >
      <motion.div
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        // initial={{ rotate: 180, scale: 0 }}
        initial={false}
        animate={{ rotate: 0, scale: 1, transition: { duration: 0.3 } }}
        whileTap={{ rotate: 180, scale: 0.6 }}
        className='h-6 w-6 fill-black dark:fill-white'
      >
        <div className='hidden dark:block'>
          <Moon />
        </div>
        <div className='dark:hidden'>
          <Sun />
        </div>
        {/* <Moon /> <Sun /> */}
      </motion.div>
    </button>
  )
}
