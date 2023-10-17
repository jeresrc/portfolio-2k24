'use client'
import React, { useState } from 'react'
import { LinkArrow } from '@/assets/svg'
import { motion } from 'framer-motion'

interface IProps {
  href: string
  text: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

function LinkButton({ href, text, rounded = 'xl' }: IProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.a
      href={href}
      className={`flex items-center rounded-${rounded} border-[1px] border-[#0000] bg-[#0001]
      px-2.5 py-1.5 hover:border-black dark:bg-[#fff1] dark:hover:border-white`}
      target='_blank'
      onMouseEnter={() => {
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
    >
      {text}

      <motion.div
        animate={isHovering ? { x: 4, y: -4 } : { x: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className='ml-0.5 h-4 w-4 fill-black dark:fill-white'
      >
        <LinkArrow />
      </motion.div>
    </motion.a>
  )
}

export default LinkButton
