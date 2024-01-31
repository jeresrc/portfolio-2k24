'use client'
import {cn} from '@/utils/cn'
import {useMotionValueEvent, useSpring} from 'framer-motion'
import React, {useCallback, useEffect, useRef} from 'react'

interface FormContainerProps {
  children: React.ReactNode
  className?: string
}

export default function FormContainer({
  children,
  className,
}: FormContainerProps) {
  const formRef = useRef<HTMLDivElement | null>(null)
  const springAngle = useSpring(0, {stiffness: 1000, damping: 200})

  const mouseMoveListener = useCallback(
    ({clientX, clientY}: MouseEvent) => {
      if (formRef.current === null) {
        return
      }
      const {x, y, width, height} = formRef.current.getBoundingClientRect()
      const dx = clientX - (x + 0.5 * width)
      const dy = clientY - (y + 0.5 * height)
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI - 90

      springAngle.set(angle)
    },
    [springAngle]
  )

  useMotionValueEvent(springAngle, 'change', (angle) => {
    if (formRef.current === null) {
      return
    }
    formRef.current.style.setProperty('--startDeg', `${angle}deg`)
  })

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveListener, false)
    return () => window.removeEventListener('mousemove', mouseMoveListener)
  }, [mouseMoveListener])

  return (
    <div ref={formRef} className={cn('form__container', className)}>
      {children}
    </div>
  )
}
