'use client'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from '.'
import { Handshake, House, SuitCase } from '@/assets/svg'
import { useWidth } from '@/hooks/useWidth'

export function TabBar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (positionY) => {
    if (positionY > 140) setScrolled(true)
    else setScrolled(false)
  })

  const variants = {
    hidden: { y: 40 },
    show: { y: -10 },
  }
  const width = useWidth()
  return (
    <>
      {width < 768 && (
        <motion.nav
          variants={variants}
          animate={scrolled ? 'show' : 'hidden'}
          transition={{ type: 'spring', damping: 50, stiffness: 600 }}
          initial='hidden'
          className='fixed bottom-0 left-0 right-0 mx-auto flex w-fit
      items-center justify-between rounded-2xl bg-[#fff4] text-black backdrop-blur-md dark:bg-[#0004] '
        >
          <motion.ul className='flex h-10 gap-2 fill-white text-white'>
            <NavLink href='#home'>
              <House />
            </NavLink>
            <NavLink href='#resume'>
              <SuitCase />
            </NavLink>
            <NavLink href='mailto:jeremiastomassrc@gmail.com'>
              <Handshake />
            </NavLink>
          </motion.ul>
        </motion.nav>
      )}
    </>
  )
}
