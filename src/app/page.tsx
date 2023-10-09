import LandingTitle from '@/components/LandingTitle'
import TextWithPopups from '@/components/TextWithPopups'
import ThisIsFine from '@/assets/imgs/this-is-fine.gif'
import Image from 'next/image'
import Chip from '@/components/Chip'
import DarkModeButton from '@/components/DarkModeButton'

export default function Home() {
  return (
    <>
      <section className='flex flex-wrap justify-between'>
        <hgroup className='flex flex-col items-start justify-center'>
          <h1
            className='title-h1 text-8xl font-[800] leading-none [font-stretch:200%]'
            id='home'
          >
            JERESC
          </h1>

          {/* <LandingTitle /> */}
          <h2 className='inline-block font-merriweather text-4xl font-[400] leading-normal'>
            <TextWithPopups
              left={
                <Image
                  width={200}
                  height={200}
                  src={ThisIsFine.src}
                  alt='dev'
                  className='h-full w-full object-cover'
                />
              }
              text='Junior'
              right="How 'about you?"
              variant='red-orange'
            />
            {' Front End Web '}
            <TextWithPopups
              left='New Stuff'
              text='Developer'
              right='Sample Text'
              variant='orange-yellow'
            />
          </h2>
        </hgroup>
        <div className='mt-1 flex h-fit max-w-sm flex-wrap items-start justify-start gap-2 md:mt-3 md:justify-end'>
          <Chip blur='lg' variant='primary'>
            jeremiastomassrc@gmail.com
          </Chip>

          <Chip blur='lg' variant='primary'>
            GitHub
          </Chip>
          <Chip blur='lg' variant='primary'>
            LinkedIn
          </Chip>
          <Chip blur='lg' variant='primary'>
            <DarkModeButton />
          </Chip>
        </div>
      </section>
      <section>
        <h2 className='mt-6 text-4xl font-[800] [font-stretch:200%]'>
          PROJECTS
        </h2>
        <Image
          width={400}
          height={400}
          src={ThisIsFine.src}
          alt='dev'
          className='h-full w-full object-cover'
        />
      </section>
      <section>
        <h2 className='mt-6 text-4xl font-[800] [font-stretch:200%]'>
          EXPERIENCE
        </h2>
      </section>
    </>
  )
}
