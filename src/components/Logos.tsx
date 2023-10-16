import React from 'react'
import ExpressLogo from '@/assets/svg/express-logo.svg'
import NextjsLogo from '@/assets/svg/nextjs-logo.svg'
import CypressLogo from '@/assets/svg/cypress-logo.svg'
import NodejsLogo from '@/assets/svg/nodejs-logo.svg'
import ReactLogo from '@/assets/svg/react-logo.svg'
import Image from 'next/image'

enum LogosList {
  Express = 'Express',
  Nextjs = 'Nextjs',
  Cypress = 'Cypress',
  Nodejs = 'Nodejs',
  React = 'React',
}

interface ILogos {
  [key: string]: string
}

const logos: ILogos = {
  Express: ExpressLogo,
  Nextjs: NextjsLogo,
  Cypress: CypressLogo,
  Nodejs: NodejsLogo,
  React: ReactLogo,
}

function Logos({ names }: { names: LogosList[] }) {
  return (
    <div className='flex h-fit w-fit justify-start gap-2 rounded-2xl border-[1px] border-[#0004] px-2 dark:border-[#fff4]'>
      {names.map((logo, index) => (
        <Image
          src={logos[logo]}
          alt={logo}
          width={22}
          height={22}
          key={index}
          className='my-1 h-6 w-6 object-cover'
        />
      ))}
    </div>
  )
}

export default Logos
