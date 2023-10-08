"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

interface IProps {
  left: string;
  right: string | React.ReactNode;
  text: string | React.ReactNode;
}

function TextWithPopups({ left, text, right }: IProps) {
  const [showPopups, setShowPopups] = useState(false);
  const leftPopup = useRef(null);
  const rightPopup = useRef(null);

  const leftVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: 40, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: -10,
      x: -(leftPopup.current?.clientWidth / 2),
      y: -(leftPopup.current?.clientHeight / 1.1),
    },
  };
  const rightVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    show: { opacity: 1, scale: 1, rotate: 10 },
  };

  return (
    <motion.span
      className="relative ml-24"
      onMouseOver={() => setShowPopups(true)}
      onMouseOut={() => setShowPopups(false)}
    >
      <motion.span
        className={`absolute top-0 translate-y-[-100%] translate-x-[-50%] left-0
        font-bold text-sm p-[5px] rounded-md whitespace-nowrap bg-red-200 text-red-600`}
        animate={showPopups ? "show" : "hidden"}
        variants={leftVariants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        ref={leftPopup}
      >
        {left}
      </motion.span>
      {text}
      <motion.span
        className="absolute bottom-0 translate-y-full right-[0] text-white
         text-sm p-[5px] rounded-md whitespace-nowrap translate-x-[50%] "
        animate={showPopups ? "show" : "hidden"}
        variants={rightVariants}
        transition={{ type: "spring", damping: 30, stiffness: 1200 }}
        ref={rightPopup}
      >
        {right}
      </motion.span>
    </motion.span>
  );
}

export default TextWithPopups;
