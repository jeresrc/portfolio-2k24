"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import Chip from "./Chip";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (positionY) => {
    if (positionY > 140) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const variants = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 10 },
  };
  return (
    <motion.header
      variants={variants}
      animate={scrolled ? "show" : "hidden"}
      initial="hidden"
      className="header text-white fixed top-0 left-0 w-full z-10 [font-stretch:expanded] font-bold
      justify-between flex px-2"
    >
      <Chip variant="secondary" blur="md">
        <a href="#">JERESC</a>
      </Chip>
      <Nav />
      <a href=""></a>
    </motion.header>
  );
}

export default Header;
