"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav";
import Chip from "./Chip";
import DarkModeButton from "./DarkModeButton";

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
    hidden: { y: -40 },
    show: { y: 10 },
  };
  return (
    <motion.header
      variants={variants}
      animate={scrolled ? "show" : "hidden"}
      transition={{ type: "spring", damping: 50, stiffness: 600 }}
      initial="hidden"
      className="text-white fixed top-0 left-0 w-full z-10 [font-stretch:expanded] font-bold
      justify-between flex px-2"
    >
      <Chip variant="secondary" blur="md">
        <a href="#">JERESC</a>
      </Chip>
      <Nav />
      <Chip variant="primary" blur="md">
        <DarkModeButton />
      </Chip>
    </motion.header>
  );
}

export default Header;
