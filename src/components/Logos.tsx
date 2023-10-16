'use client'
import React from 'react'
import {
  CypressLogo,
  ExpressLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
} from '@/assets/svg'

interface ILogos {
  [key: string]: JSX.Element
}

const logos: ILogos = {
  Express: <ExpressLogo />,
  Nextjs: <NextjsLogo />,
  Cypress: <CypressLogo />,
  Nodejs: <NodejsLogo />,
  React: <ReactLogo />,
}

interface IProps {
  names: string[]
}

function Logos({ names }: IProps) {
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

export default Logos
