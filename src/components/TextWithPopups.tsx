"use client";
import {motion} from "framer-motion";
import {useState} from "react";

interface TextWithPopupsProps {
  left: string | React.ReactNode;
  right: string | React.ReactNode;
  text: string;
  variant: string;
}

export function TextWithPopups({left, text, right, variant}: TextWithPopupsProps) {
  const variantCreator = (variant: string, placement: string) => {
    const colors: Record<string, string> = {
      none: "bg-transparent text-transparent",
      red: "bg-red-200 text-red-600",
      orange: "bg-orange-200 text-orange-600",
      yellow: "bg-yellow-200 text-yellow-600",
      green: "bg-green-200 text-green-600",
      blue: "bg-blue-200 text-blue-600",
      purple: "bg-purple-200 text-purple-600",
      pink: "bg-pink-200 text-pink-600",
      black: "bg-black-200 text-black-600",
      white: "bg-white-200 text-white-600",
    };

    const variantArray = variant.split("-");

    return placement == "left" ? colors[variantArray[0]] : colors[variantArray[1]];
  };
  const [showPopups, setShowPopups] = useState(false);

  const leftVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
      x: "calc(-10%)",
      y: "calc(-45%)",
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: -10,
      x: "calc(-50%)",
      y: "calc(-95%)",
    },
  };
  const rightVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
      x: "calc(25%)",
      y: "calc(70%)",
    },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 10,
      x: "calc(75%)",
      y: "calc(120%)",
    },
  };

  return (
    <motion.span
      className="relative cursor-help hover:text-orange-400"
      onMouseOut={() => setShowPopups(false)}
      onMouseOver={() => setShowPopups(true)}
    >
      <motion.span
        animate={showPopups ? "show" : "hidden"}
        className={`absolute left-0 top-0  overflow-hidden
        whitespace-nowrap rounded-md object-cover text-sm font-bold
        ${
          typeof left != "string"
            ? "h-[100px] w-[100px]"
            : `p-[5px] ${variantCreator(variant, "left")}`
        }
`}
        initial="hidden"
        transition={{type: "spring", damping: 30, stiffness: 1200}}
        variants={leftVariants}
      >
        {left}
      </motion.span>
      {text}
      <motion.span
        animate={showPopups ? "show" : "hidden"}
        className={`absolute bottom-0 right-0 overflow-hidden
         whitespace-nowrap rounded-md font-montserrat text-sm font-bold
        ${
          typeof right != "string"
            ? "h-[100px] w-[100px]"
            : `p-[5px] ${variantCreator(variant, "right")}`
        }
`}
        initial="hidden"
        transition={{type: "spring", damping: 30, stiffness: 1200}}
        variants={rightVariants}
      >
        {right}
      </motion.span>
    </motion.span>
  );
}

export default TextWithPopups;
