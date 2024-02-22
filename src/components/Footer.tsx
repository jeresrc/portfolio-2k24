import React from 'react'
import {Chip} from '.'
import {EnvelopeClosedIcon} from '@radix-ui/react-icons'

export function Footer() {
  return (
    <footer className='w-full gap-4 border-t-[1px] border-t-border py-[7px]'>
      <div className='mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4'>
        <div className='flex max-h-[31px] gap-2 [&_div]:h-[31px]'>
          <a
            href='mailto:jeremiastomassrc@gmail.com'
            // className='mb-0.5 ml-1 h-6.5'
          >
            <Chip variant='primary'>
              <EnvelopeClosedIcon width={20} height={20} />
              <span className='sr-only'>Email: jeremiastomassrc@gmail.com</span>
            </Chip>
          </a>
          <a
            href='https://github.com/jeresc'
            target='_blank'
            className='hidden xs:block'
          >
            <Chip variant='primary'>GitHub</Chip>
          </a>
          <a
            href='https://www.linkedin.com/in/jeresc'
            target='_blank'
            className='hidden sm:block'
          >
            <Chip variant='primary'>LinkedIn</Chip>
          </a>
          <a
            href='/CV_Full Stack Web Developer_Soruco Jeremias.pdf'
            download
            className='hidden 2xs:block'
          >
            <Chip variant='primary'>CV</Chip>
          </a>
        </div>
        <p className='ml-auto'>© {new Date().getFullYear()} Jeremias Soruco</p>
      </div>
    </footer>
  )
}
