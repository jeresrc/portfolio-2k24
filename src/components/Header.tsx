'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import Nav from './Nav'
import Chip from './Chip'
import DarkModeButton from './DarkModeButton'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (positionY) => {
    if (positionY > 140) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  const variants = {
    hidden: { y: -40 },
    show: { y: 10 },
  }
  return (
    <motion.header
      variants={variants}
      animate={scrolled ? 'show' : 'hidden'}
      transition={{ type: 'spring', damping: 50, stiffness: 600 }}
      initial='hidden'
      className='fixed left-0 top-0 z-10 flex w-full justify-between px-4
      font-bold text-white [font-stretch:expanded]'
    >
      <Chip variant='secondary' blur='md'>
        <a href='#'>JERESC</a>
      </Chip>
      <Nav />
      <Chip variant='secondary' blur='md'>
        <DarkModeButton />
      </Chip>
    </motion.header>
  )
}

export default Header
