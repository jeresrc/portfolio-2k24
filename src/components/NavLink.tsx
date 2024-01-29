'use client'

import {motion} from 'framer-motion'
import Link from 'next/link'

interface IProps {
  children: React.ReactNode
  href: string
}

export function NavLink({children, href}: IProps) {
  return (
    <motion.li className='relative rounded-2xl px-2 py-1.5'>
      <Link href={href} className='relative'>
        {children}
      </Link>
    </motion.li>
  )
}
