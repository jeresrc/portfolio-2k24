'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { NavLink } from './NavLink'

export function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>('home')

  return (
    <nav className='flex items-center justify-between rounded-2xl bg-[#0004] text-white backdrop-blur-md'>
      <motion.ul className='flex gap-2'>
        <NavLink href='#home'>
          Home
          {linkSelected == 'home' ? (
            <motion.span
              className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
              bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
        <NavLink href='#resume'>
          Resume
          {linkSelected == 'resume' ? (
            <motion.span
              className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
              bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
        <NavLink href='mailto:jeremiastomassrc@gmail.com'>
          Contact
          {linkSelected == 'contact' ? (
            <motion.span
              className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
              bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
      </motion.ul>
      <button
        onClick={() =>
          setLinkSelected(linkSelected == 'home' ? 'projects' : 'home')
        }
      >
        A
      </button>
      <button
        onClick={() =>
          setLinkSelected(linkSelected == 'home' ? 'contact' : 'home')
        }
      >
        B
      </button>
    </nav>
  )
}
