"use client";
import {AnimatePresence, motion, useInView} from "framer-motion";
import {useEffect, useRef, useState} from "react";

import {useWidth} from "@/hooks/useWidth";

interface LoopImagesGalleryProps {
  images: React.ReactNode[];
}

export function LoopImagesGallery({images}: LoopImagesGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const width = useWidth();

  const ref = useRef(null);
  const isInView = useInView(ref, {amount: "all"});

  useEffect(() => {
    currentImage == 0 && isHovering && setCurrentImage(1);

    const interval = setInterval(() => {
      isHovering || (width < 768 && isInView)
        ? currentImage === images.length - 1
          ? setCurrentImage(1)
          : setCurrentImage((currentImage + 1) % images.length)
        : setCurrentImage(0);
    }, 900);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage, images, isHovering, isInView, width]);

  return (
    <>
      <motion.picture
        ref={ref}
        className="h-full max-h-[520px] w-full max-w-[1050px] cursor-pointer overflow-hidden rounded-lg shadow-lg"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence mode="popLayout">{images[currentImage]}</AnimatePresence>
      </motion.picture>
      <div className="absolute h-0 w-0 opacity-0">{images[currentImage + 1]}</div>
    </>
  );
}

export default LoopImagesGallery;
