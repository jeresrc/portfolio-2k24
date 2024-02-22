'use client'
import React from 'react'
import {
  AstroLogo,
  CypressLogo,
  ExpressLogo,
  FramerMotionLogo,
  JestLogo,
  JsLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  ReduxLogo,
  TsLogo,
  ViteLogo,
  ZustandLogo,
} from '@/assets/svg'

import {TooltipGroup} from './tooltip-group'
import {Tooltip} from './tooltip'

interface ILogos {
  [key: string]: JSX.Element
}

const logos: ILogos = {
  Javascript: <JsLogo />,
  Typescript: <TsLogo />,
  Express: <ExpressLogo />,
  Nextjs: <NextjsLogo />,
  Cypress: <CypressLogo />,
  Nodejs: <NodejsLogo />,
  React: <ReactLogo />,
  Redux: <ReduxLogo />,
  Jest: <JestLogo />,
  Astro: <AstroLogo />,
  Vite: <ViteLogo />,
  Zustand: <ZustandLogo />,
  FramerMotion: <FramerMotionLogo />,
}

interface IProps {
  names: string[]
}

export function Logos({names}: IProps) {
  return (
    <TooltipGroup placement='top'>
      <div
        className='flex h-fit w-fit justify-start gap-2
      rounded-2xl border-[1px] border-[#0004] px-2 py-1 dark:border-[#fff4]'
      >
        <p className='sr-only'>Tech stack used:</p>
        {names.map((logo) => (
          <Tooltip
            key={logo}
            content={logo.replace(/([A-Z])/g, ' $1').trim()}
            showDelay={300}
            hideDelay={10}
          >
            <div className='h-6 w-6 fill-black dark:fill-white'>
              {logos[logo]}
              <span className='sr-only'>
                {logo.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </div>
          </Tooltip>
        ))}
      </div>
    </TooltipGroup>
  )
}
