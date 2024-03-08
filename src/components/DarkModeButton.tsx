"use client";
import {motion} from "framer-motion";
import React from "react";
import {useTheme} from "next-themes";

import {Moon, Sun} from "@/assets/svg";

export function DarkModeButton() {
  const {setTheme, theme} = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      aria-label="toggle dark mode"
      className="flex h-full w-full cursor-pointer items-center justify-center"
      type="button"
      onClick={toggleDarkMode}
    >
      <motion.div
        animate={{rotate: 0, scale: 1, transition: {duration: 0.3}}}
        className="h-6 w-6 fill-black dark:fill-white"
        initial={false}
        transition={{type: "spring", stiffness: 400, damping: 40}}
        whileTap={{rotate: 180, scale: 0.6}}
        // initial={{ rotate: 180, scale: 0 }}
      >
        <div className="hidden dark:block">
          <Moon />
        </div>
        <div className="dark:hidden">
          <Sun />
        </div>
        {/* <Moon /> <Sun /> */}
      </motion.div>
    </button>
  );
}
