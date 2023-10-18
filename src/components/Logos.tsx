'use client'
import React from 'react'
import {
  AstroLogo,
  CypressLogo,
  ExpressLogo,
  JestLogo,
  JsLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  ReduxLogo,
  TsLogo,
  ViteLogo,
} from '@/assets/svg'

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
}

interface IProps {
  names: string[]
}

export function Logos({ names }: IProps) {
  return (
    <div
      className='flex h-fit w-fit justify-start gap-2
      rounded-2xl border-[1px] border-[#0004] px-2 py-1 dark:border-[#fff4]'
    >
      {names.map((logo, index) => (
        <span key={index} className='h-6 w-6 fill-black dark:fill-white'>
          {logos[logo]}
        </span>
      ))}
    </div>
  )
}
