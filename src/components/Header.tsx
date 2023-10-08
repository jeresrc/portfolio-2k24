"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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
      className="header text-white fixed top-0 left-0 w-full z-10"
    >
      <nav className="flex items-center justify-between">
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
