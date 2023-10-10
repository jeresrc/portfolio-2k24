'use client'
import React, { useState } from 'react'
import LinkArrowSvg from '@/assets/svg/link-arrow.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface IProps {
  href: string
  text: string
}

const MotionImage = motion(Image)

function LinkButton({ href, text }: IProps) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.a
      href={href}
      className='flex rounded-xl border-[1px] border-[#0000] bg-[#0001] px-2.5 py-1.5 hover:border-black dark:bg-[#fff1] dark:hover:border-white'
      target='_blank'
      onMouseEnter={() => {
        setIsHovering(true)
      }}
      onMouseLeave={() => {
        setIsHovering(false)
      }}
    >
      {text}

      <motion.img
        src={LinkArrowSvg.src}
        alt='link-arrow'
        width={16}
        height={16}
        animate={isHovering ? { x: 4, y: -4 } : { x: 0, y: 0 }}
        transition={{ duration: 0.2 }}
        className='ml-0.5 fill-black dark:fill-white'
        layoutId='link-arrow'
      />
    </motion.a>
  )
}

export default LinkButton
