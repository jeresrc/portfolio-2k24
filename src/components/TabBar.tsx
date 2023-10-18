'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from '.'
import { Handshake, House, SuitCase } from '@/assets/svg'

export function TabBar() {
  return (
    <nav
      className='fixed bottom-2 left-0 right-0 mx-auto flex w-fit
      items-center justify-between rounded-2xl bg-[#fff4] text-black backdrop-blur-md dark:bg-[#0004] dark:text-white'
    >
      <motion.ul className='flex h-11 gap-2 fill-white'>
        <NavLink href='#home'>
          <House />
          <motion.span
            className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
            bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
            layoutId='selected'
          />
        </NavLink>
        <NavLink href='#projects'>
          <SuitCase />
          <motion.span
            className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
            bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
            layoutId='selected'
          />
        </NavLink>
        <NavLink href='#contact'>
          <Handshake />
          <motion.span
            className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
            bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
            layoutId='selected'
          />
        </NavLink>
      </motion.ul>
    </nav>
  )
}
