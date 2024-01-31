'use client'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

export function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.1) {
            setLinkSelected(entry.target.id)
          }
        })
      },
      {threshold: [0, 1]}
    )

    document.querySelectorAll('section').forEach((t) => {
      if (!t.id) return
      observer.observe(t)
    })
  }, [])

  return (
    <nav className='hidden items-center justify-between rounded-2xl bg-[#0004] text-white backdrop-blur-md md:flex'>
      <motion.ul className='flex gap-2'>
        <a href='#home' className='relative rounded-2xl px-2 py-1.5'>
          Home
          {linkSelected == 'home' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
        <a href='#resume' className='relative rounded-2xl px-2 py-1.5'>
          Resume
          {linkSelected == 'resume' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
        <a href='#contact' className='relative rounded-2xl px-2 py-1.5'>
          Contact
          {linkSelected == 'contact' && (
            <motion.span className='navlink--selected' layoutId='selected' />
          )}
        </a>
      </motion.ul>
    </nav>
  )
}
