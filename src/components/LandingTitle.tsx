'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import thisIsFineGif from '../assets/imgs/this-is-fine.gif'
import Chip from './Chip'

const LandingTitle = () => {
  const [text, showText] = useState<null | number>(null)
  const lVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: 40, y: 30 },
    show: { opacity: 1, scale: 1, rotate: -10, x: 0, y: 0 },
  }

  const rVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: -40, y: -30 },
    show: { opacity: 1, scale: 1, rotate: 10, x: 0, y: 0 },
  }

  const l2Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: 40, y: 30 },
    show: { opacity: 1, scale: 1, rotate: -10, x: 0, y: 0 },
  }

  const r2Variants = {
    hidden: { opacity: 0, scale: 0, rotate: 0, x: -40, y: -30 },
    show: { opacity: 1, scale: 1, rotate: 10, x: 0, y: 0 },
  }

  return (
    <div className='relative w-fit'>
      <h2 className='inline-block font-merriweather text-3xl font-[400] leading-normal'>
        <span
          onMouseOver={() => showText(1)}
          onMouseOut={() => showText(null)}
          className={`${text == 1 ? 'text-red-300' : 'text-white'} cursor-help`}
        >
          Junior
        </span>
        {' Front End Web '}
        <span
          onMouseOver={() => showText(2)}
          onMouseOut={() => showText(null)}
          className={`${text == 2 ? 'text-orange-300' : 'text-white'}`}
        >
          Developer
        </span>
      </h2>
      <motion.p
        animate={text == 1 ? 'show' : 'hidden'}
        initial='hidden'
        variants={lVariants}
        transition={{ type: 'spring', damping: 30, stiffness: 1200 }}
        className='absolute left-[-26px] top-[-26px] rounded-md bg-red-200 p-[5px] text-sm font-bold text-red-600'
      >
        New Stuff
      </motion.p>

      <motion.p
        animate={text == 1 ? 'show' : 'hidden'}
        initial='hidden'
        variants={rVariants}
        transition={{ type: 'spring', damping: 30, stiffness: 1200 }}
        className='absolute bottom-[-32px] left-20 rounded-md bg-sky-200 p-[5px] text-sm font-bold text-sky-600'
      >
        Sample Text
      </motion.p>

      <motion.img
        src={thisIsFineGif.src}
        alt='This is fine meme gif'
        animate={text == 2 ? 'show' : 'hidden'}
        initial='hidden'
        variants={l2Variants}
        transition={{ type: 'spring', damping: 30, stiffness: 1200 }}
        className='absolute right-[86px] top-[-86px] h-[100px] w-[100px] rounded-md object-cover text-sm font-bold text-red-600'
      />

      <motion.p
        animate={text == 2 ? 'show' : 'hidden'}
        initial='hidden'
        variants={r2Variants}
        transition={{ type: 'spring', damping: 30, stiffness: 1200 }}
        className='absolute bottom-[-32px] right-[-36px] rounded-md bg-orange-200 p-[5px] text-sm font-bold text-orange-600'
      >
        How &apos;bout you?
      </motion.p>
    </div>
  )
}

export default LandingTitle
