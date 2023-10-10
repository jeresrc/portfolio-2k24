'use client'
import { useEffect, useState } from 'react'

interface IProps {
  images: React.ReactNode[]
}

function LoopImagesGallery({ images }: IProps) {
  const [currentImage, setCurrentImage] = useState(images[0])
  useEffect(() => {
    for (let i = 0; i < images.length; i++) {
      setTimeout(() => {
        setCurrentImage(images[i])
      }, i * 1000)
      if (i == images.length - 1) {
        setTimeout(
          () => {
            setCurrentImage(images[0])
          },
          images.length * i * 1000
        )
      }
    }
  }, [images])
  return <figure>{currentImage}</figure>
}

export default LoopImagesGallery
