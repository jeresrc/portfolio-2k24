'use client'
import {cn} from '@/utils/cn'
import {useMotionValueEvent, useSpring} from 'framer-motion'
import React, {useCallback, useEffect, useRef} from 'react'

export function GradientHr({className}: {className?: string}) {
  const hrRef = useRef<HTMLHRElement | null>(null)
  const springAngle = useSpring(0, {stiffness: 1000, damping: 100})

  const mouseMoveListener = useCallback(
    ({clientX}: MouseEvent) => {
      if (hrRef.current === null) {
        return
      }
      const {x, width} = hrRef.current.getBoundingClientRect()
      const transparency = -(((clientX - x) / width) * 300) + 150

      springAngle.set(transparency)
    },
    [springAngle]
  )

  useMotionValueEvent(springAngle, 'change', (angle) => {
    if (hrRef.current === null) {
      return
    }
    hrRef.current.style.setProperty('--transparency', `${angle}%`)
  })

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveListener, false)
    return () => window.removeEventListener('mousemove', mouseMoveListener)
  }, [mouseMoveListener])

  return (
    <hr
      className={cn(
        'h-[1px] w-full border-none bg-[linear-gradient(-90deg,rgb(var(--box-shadow-color)/7%)_0,var(--border)_var(--transparency),rgb(var(--box-shadow-color)/7%)_100%)] [--box-color:40_40_40] [--transparency:0%] dark:[--box-color:100_100_100]',
        className
      )}
      ref={hrRef}
    />
  )
}
