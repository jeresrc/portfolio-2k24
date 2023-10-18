'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>('home')

  return (
    <nav className='flex items-center justify-between rounded-2xl bg-[#fff4] text-black backdrop-blur-md dark:bg-[#0004] dark:text-white'>
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
        <NavLink href='#projects'>
          Resume
          {linkSelected == 'projects' ? (
            <motion.span
              className='absolute left-0 top-1 h-full w-full border-b-[2px] border-black
              bg-[#0000] backdrop-contrast-200 backdrop-saturate-200 dark:border-white'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
        <NavLink href='#contact'>
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

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <motion.li className='relative rounded-2xl px-2 py-1.5 hover:bg-[#fffc] hover:text-black'>
      <Link href={href} className='relative'>
        {children}
      </Link>
    </motion.li>
  )
}

export default Nav
