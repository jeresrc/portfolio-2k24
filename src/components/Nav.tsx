"use client";
import {motion} from "framer-motion";

import {useCurrentSection} from "@/store/currentSection";

export function Nav() {
  const current = useCurrentSection((state) => state.current);

  return (
    <nav className="hidden items-center justify-between rounded-2xl bg-[#0004] text-white backdrop-blur-md md:flex">
      <motion.ul className="flex gap-2">
        <a className="relative rounded-2xl px-2 py-1.5" href="#home">
          Home
          {current == "home" && <motion.span className="navlink--selected" layoutId="selected" />}
        </a>
        <a className="relative rounded-2xl px-2 py-1.5" href="#resume">
          Resume
          {current == "resume" && <motion.span className="navlink--selected" layoutId="selected" />}
        </a>
        <a className="relative rounded-2xl px-2 py-1.5" href="#contact">
          Contact
          {current == "contact" && (
            <motion.span className="navlink--selected" layoutId="selected" />
          )}
        </a>
      </motion.ul>
    </nav>
  );
}
