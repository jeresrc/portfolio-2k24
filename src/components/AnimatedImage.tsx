"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import React, {forwardRef} from "react";

interface AnimatedImagesProps {
  src: string;
  alt: string;
  priority?: boolean;
  isCover?: boolean;
}

const MotionImage = motion(Image);

export const AnimatedImage = forwardRef(function AnimatedImage(
  {src, alt, priority}: AnimatedImagesProps,
  ref: React.ForwardedRef<HTMLImageElement>,
) {
  return (
    <MotionImage
      ref={ref}
      alt={alt}
      exit={{opacity: 0, y: 30, scale: 0.8}}
      height={470}
      initial={{opacity: 1, y: 0, scale: 1}}
      layout="position"
      src={src}
      transition={{duration: 0.4, type: "spring"}}
      // width={isCover ? 1050 : 850}
      // height={isCover ? 700 : 470}
      width={850}
      {...(priority && {priority: true})}
      className="aspect-video h-full w-full rounded-lg object-cover"
    />
  );
});
