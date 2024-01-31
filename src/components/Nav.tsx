'use client'
import {useCurrentSection} from '@/store/currentSection'
import {motion} from 'framer-motion'

export function Nav() {
  const current = useCurrentSection((state) => state.current)

  return (
    <nav className='hidden items-center justify-between rounded-2xl bg-[#0004] text-white backdrop-blur-md md:flex'>
      <motion.ul className='flex gap-2'>
        <a href='#home' className='relative rounded-2xl px-2 py-1.5'>
          Home
          {current == 'home' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
        <a href='#resume' className='relative rounded-2xl px-2 py-1.5'>
          Resume
          {current == 'resume' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
        <a href='#contact' className='relative rounded-2xl px-2 py-1.5'>
          Contact
          {current == 'contact' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
      </motion.ul>
    </nav>
  )
}
