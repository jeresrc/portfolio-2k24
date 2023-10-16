'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>('home')

  return (
    <nav
      className='flex items-center justify-between rounded-2xl bg-[#0004]
     text-white backdrop-blur-md'
    >
      <motion.ul className='flex gap-2'>
        <NavLink href='#home'>
          Home
          {linkSelected == 'home' ? (
            <motion.div
              className='absolute left-0 top-0 h-full w-full rounded-2xl bg-[#fff0]
              backdrop-contrast-200 backdrop-saturate-200'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
        <NavLink href='#projects'>
          Resume
          {linkSelected == 'projects' ? (
            <motion.div
              className='absolute left-0 top-0 h-full w-full rounded-2xl bg-[#0000] 
              backdrop-contrast-200 backdrop-saturate-200'
              layoutId='selected'
            />
          ) : (
            ''
          )}
        </NavLink>
        <NavLink href='#contact'>
          Contact
          {linkSelected == 'contact' ? (
            <motion.div
              className='absolute left-0 top-0 h-full w-full rounded-2xl bg-[#fff0] backdrop-contrast-200'
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
      <Link href={href}>{children}</Link>
    </motion.li>
  )
}

export default Nav
