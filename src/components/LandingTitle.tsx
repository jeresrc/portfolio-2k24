"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import thisIsFineGif from "../assets/imgs/this-is-fine.gif";
import Chip from "./Chip";

const LandingTitle = () => {
  const [text, showText] = useState<null | number>(null);
  const lVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: 40, y: 30 },
    show: { opacity: 1, scale: 1, rotate: -10, x: 0, y: 0 },
  };

  const rVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: -40, y: -30 },
    show: { opacity: 1, scale: 1, rotate: 10, x: 0, y: 0 },
  };

  const l2Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: 40, y: 30 },
    show: { opacity: 1, scale: 1, rotate: -10, x: 0, y: 0 },
  };

  const r2Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: -40, y: -30 },
    show: { opacity: 1, scale: 1, rotate: 10, x: 0, y: 0 },
  };

  return (
    <div className="relative w-fit">
      <h2 className="text-3xl leading-normal inline-block font-[400] font-merriweather">
        <span
          onMouseOver={() => showText(1)}
          onMouseOut={() => showText(null)}
          className={`${text == 1 ? "text-red-300" : "text-white"} cursor-help`}
        >
          Junior
        </span>
        {" Front End Web "}
        <span
          onMouseOver={() => showText(2)}
          onMouseOut={() => showText(null)}
          className={`${text == 2 ? "text-orange-300" : "text-white"}`}
        >
          Developer
        </span>
      </h2>
      <motion.p
        animate={text == 1 ? "show" : "hidden"}
        initial="hidden"
        variants={lVariants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        className="absolute font-bold text-red-600 text-sm top-[-26px] left-[-26px] rounded-md bg-red-200 p-[5px]"
      >
        New Stuff
      </motion.p>

      <motion.p
        animate={text == 1 ? "show" : "hidden"}
        initial="hidden"
        variants={rVariants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        className="absolute font-bold text-sky-600 text-sm bottom-[-32px] left-20 rounded-md bg-sky-200 p-[5px]"
      >
        Sample Text
      </motion.p>

      <motion.img
        src={thisIsFineGif.src}
        alt="This is fine meme gif"
        animate={text == 2 ? "show" : "hidden"}
        initial="hidden"
        variants={l2Variants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        className="absolute font-bold text-red-600 text-sm top-[-86px] right-[86px] rounded-md w-[100px] h-[100px] object-cover"
      />

      <motion.p
        animate={text == 2 ? "show" : "hidden"}
        initial="hidden"
        variants={r2Variants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        className="absolute font-bold text-orange-600 text-sm bottom-[-32px] right-[-36px] rounded-md bg-orange-200 p-[5px]"
      >
        How &apos;bout you?
      </motion.p>
    </div>
  );
};

export default LandingTitle;
