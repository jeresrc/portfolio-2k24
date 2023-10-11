'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { forwardRef } from 'react'

interface IProps {
  src: string
  alt: string
  priority?: boolean
  isCover?: boolean
}

const MotionImage = motion(Image)

const AnimatedImage = forwardRef(function AnimatedImage(
  { src, alt, priority, isCover }: IProps,
  ref: React.ForwardedRef<HTMLImageElement>
) {
  return (
    <MotionImage
      ref={ref}
      src={src}
      alt={alt}
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      {...(isCover
        ? { width: 1050, height: 700 }
        : { width: 850, height: 470 })}
      {...(priority && { priority: true })}
      className='rounded-lg object-cover'
    />
  )
})

export default AnimatedImage
