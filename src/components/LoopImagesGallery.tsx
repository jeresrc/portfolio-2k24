'use client'
import { useWidth } from '@/hooks/useWidth'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface IProps {
  images: React.ReactNode[]
}

function LoopImagesGallery({ images }: IProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const width = useWidth()

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 'all' })

  useEffect(() => {
    const interval = setInterval(() => {
      isHovering || (width < 768 && isInView)
        ? currentImage === images.length - 1
          ? setCurrentImage(1)
          : setCurrentImage((currentImage + 1) % images.length)
        : setCurrentImage(0)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [currentImage, images, isHovering, isInView, width])

  return (
    <>
      <motion.figure
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        ref={ref}
        className='h-full w-full cursor-pointer overflow-hidden rounded-lg object-cover shadow-lg'
      >
        <AnimatePresence mode='popLayout'>
          {images[currentImage]}
        </AnimatePresence>
      </motion.figure>
      <div className='absolute h-0 w-0 opacity-0'>
        {images[currentImage + 1]}
      </div>
    </>
  )
}

export default LoopImagesGallery
