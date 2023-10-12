'use client'
import { useDarkMode } from '@/hooks/useDarkMode'
import { motion } from 'framer-motion'
import Sun from '@/assets/svg/sun.svg'
import Moon from '@/assets/svg/moon.svg'
import Image from 'next/image'
import React from 'react'

const AnimatedSvg = motion(Image)

function DarkModeButton() {
  const { toggleDarkMode, darkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      aria-label='toggle dark mode'
      className='flex h-full w-full cursor-pointer items-center justify-center'
    >
      <motion.div
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        whileTap={{ scale: 0.6, rotate: 90 }}
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
