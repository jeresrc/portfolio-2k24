"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";

import {LinkArrow} from "@/assets/svg";

interface LinkButtonProps {
  href: string;
  text: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export function LinkButton({href, text, rounded = "lg"}: LinkButtonProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.a
      className={`flex items-center rounded-${rounded} border-[1px] border-[#0000] bg-[#0001]
      px-2.5 py-1.5 hover:border-black dark:bg-[#fff1] dark:hover:border-white`}
      href={href}
      target="_blank"
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {text}

      <motion.div
        animate={isHovering ? {x: 4, y: -4} : {x: 0, y: 0}}
        className="ml-0.5 h-4 w-4 fill-black dark:fill-white"
        transition={{duration: 0.2}}
      >
        <LinkArrow />
      </motion.div>
    </motion.a>
  );
}
