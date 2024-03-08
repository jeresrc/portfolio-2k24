"use client";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import React, {useState} from "react";

import {Mail, House, SuitCase} from "@/assets/svg";
import {useCurrentSection} from "@/store/currentSection";

export function TabBar() {
  const current = useCurrentSection((state) => state.current);
  const [scrolled, setScrolled] = useState(false);
  const [endScrolled, setEndScrolled] = useState(false);
  const {scrollY, scrollYProgress} = useScroll();

  useMotionValueEvent(scrollY, "change", (positionY) => {
    if (positionY > 140) setScrolled(true);
    else setScrolled(false);
  });

  useMotionValueEvent(scrollYProgress, "change", (progressY) => {
    if (progressY > 0.9) setEndScrolled(true);
    else setEndScrolled(false);
  });

  const variants = {
    hidden: {y: 40},
    show: {y: -10},
  };

  return (
    <motion.nav
      animate={scrolled && !endScrolled ? "show" : "hidden"}
      className="fixed bottom-0 left-0 right-0 mx-auto flex w-3/5 max-w-[320px] items-center rounded-2xl bg-[#0004] text-white backdrop-blur-md md:hidden"
      initial="hidden"
      transition={{type: "spring", damping: 50, stiffness: 600}}
      variants={variants}
    >
      <motion.ul className="flex h-10 w-full justify-around gap-0.5 fill-white text-white">
        <a className="relative flex-1 rounded-2xl px-2 py-1.5" href="#home">
          <House />
          {current == "home" && (
            <motion.span className="navlink--selected" layoutId="tab-selected" />
          )}
        </a>
        <a className="relative flex-1 rounded-2xl px-2 py-1.5" href="#resume">
          <SuitCase />
          {current == "resume" && (
            <motion.span className="navlink--selected" layoutId="tab-selected" />
          )}
        </a>
        <a className="relative flex-1 rounded-2xl px-2 py-1.5" href="#contact">
          <Mail />
          {current == "contact" && (
            <motion.span className="navlink--selected" layoutId="tab-selected" />
          )}
        </a>
      </motion.ul>
    </motion.nav>
  );
}
