import {AnimationProps} from 'framer-motion'

export const variants: AnimationProps['variants'] = {
  initial: {
    y: 'calc(-100%)',
    opacity: 1,
  },
  animate: {
    y: 10,
    opacity: 0,
  },
}

export const transition: AnimationProps['transition'] = {
  duration: 0.4,
  stiffness: 200,
  damping: 30,

  opacity: {
    delay: 0.1,
  },
}
