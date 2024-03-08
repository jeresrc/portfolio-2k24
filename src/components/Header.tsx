"use client";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import {useState} from "react";

import {Chip, DarkModeButton, Nav} from ".";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (positionY) => {
    if (positionY > 140) setScrolled(true);
    else setScrolled(false);
  });

  const variants = {
    hidden: {y: -40},
    show: {y: 10},
  };

  return (
    <motion.header
      animate={scrolled ? "show" : "hidden"}
      className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-7xl
      justify-between px-4 font-bold text-white [font-stretch:expanded]"
      initial="hidden"
      transition={{type: "spring", damping: 50, stiffness: 600}}
      variants={variants}
    >
      <Chip blur="md" variant="secondary">
        <p className="h-[14px] leading-none">JERESC</p>
      </Chip>
      <Nav />
      <Chip blur="md" variant="secondary">
        <DarkModeButton />
      </Chip>
    </motion.header>
  );
}
