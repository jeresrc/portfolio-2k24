'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface IProps {
  images: React.ReactNode[]
}

function LoopImagesGallery({ images }: IProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovering) {
        setCurrentImage((currentImage + 1) % images.length)
      } else {
        setCurrentImage(0)
      }
    }, 700)
    return () => {
      clearInterval(interval)
    }
  }, [currentImage, images, isHovering])

  return (
    <figure
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className='h-full w-full cursor-pointer overflow-hidden rounded-lg object-cover shadow-lg'
    >
      {images[currentImage]}
    </figure>
  )
}

export default LoopImagesGallery
