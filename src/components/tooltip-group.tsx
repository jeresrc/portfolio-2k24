'use client'

import {Placement, FloatingDelayGroup} from '@floating-ui/react'
import {LayoutGroup} from 'framer-motion'
import {createContext, ReactNode, useId} from 'react'

export const TooltipGroupContext = createContext<{
  groupId: string | undefined
  placement: Placement
}>({
  groupId: undefined,
  placement: 'top',
})

export type TooltipGroupProps = {
  showDelay?: number
  hideDelay?: number
  timeout?: number
  placement?: Placement
  children: ReactNode
}

export function TooltipGroup({
  showDelay = 600,
  hideDelay = 200,
  timeout = 300,
  placement = 'top',
  children,
}: TooltipGroupProps) {
  const groupId = useId()

  return (
    <TooltipGroupContext.Provider value={{groupId, placement}}>
      <FloatingDelayGroup
        delay={{open: showDelay, close: hideDelay}}
        timeoutMs={timeout}
      >
        <LayoutGroup>{children}</LayoutGroup>
      </FloatingDelayGroup>
    </TooltipGroupContext.Provider>
  )
}
