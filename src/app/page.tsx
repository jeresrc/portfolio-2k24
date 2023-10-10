import TextWithPopups from '@/components/TextWithPopups'
import ThisIsFine from '@/assets/imgs/this-is-fine.gif'
import AndgamesShot1 from '@/assets/imgs/andgames-shot-1.jpeg'
import AndgamesShot2 from '@/assets/imgs/andgames-shot-2.jpg'
import AndgamesShot3 from '@/assets/imgs/andgames-shot-3.jpg'
import AndgamesShot4 from '@/assets/imgs/andgames-shot-4.jpg'
import AndgamesShot404 from '@/assets/imgs/andgames-shot-404.jpg'
import Image from 'next/image'
import Chip from '@/components/Chip'
import DarkModeButton from '@/components/DarkModeButton'
import LoopImagesGallery from '@/components/LoopImagesGallery'
import LinkButton from '@/components/LinkButton'

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
          EXPERIENCE
        </h2>
      </section>
      <section>
        <h2 className='mt-6 text-4xl font-[800] [font-stretch:200%]'>
          PROJECTS
        </h2>

        <article className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <LoopImagesGallery
            images={[
              <Image
                src={AndgamesShot1.src}
                alt='andgames project Landing page screenshot'
                width={1244}
                height={700}
                className='h-full w-full object-contain'
                key={1}
              />,
              <Image
                src={AndgamesShot2.src}
                alt='andgames project Home desktop screenshot'
                width={1244}
                height={700}
                className='h-full w-full object-contain'
                key={2}
              />,
              <Image
                src={AndgamesShot3.src}
                alt='andgames project Home mobile screenshot'
                width={1244}
                height={700}
                className='h-full w-full object-cover'
                key={3}
              />,
              <Image
                src={AndgamesShot4.src}
                alt='andgames project loading Home desktop screenshot'
                width={1244}
                height={700}
                className='h-full w-full object-cover'
                key={4}
              />,

              <Image
                src={AndgamesShot404.src}
                alt='andgames project loading Home desktop screenshot'
                width={1244}
                height={700}
                className='h-full w-full object-cover'
                key={5}
              />,
            ]}
          />
          <div className='flex flex-col items-start justify-center gap-3'>
            <h2 className='text-3xl font-[800] [font-stretch:200%]'>&games</h2>
            <div className='flex gap-2'>
              <LinkButton
                href='https://videogames-app-jeresc.vercel.app/'
                text='Live Demo'
              />
              <LinkButton
                href='https://github.com/jeresc/andgames'
                text='Source Code'
              />
            </div>
            <p>
              This is a Single Page Application (SPA) frontend created with
              React, Redux Toolkit, and Styled Components. The application
              fetches video game data from the rawg.io API and also features its
              own database to save new games.
            </p>
          </div>
        </article>
      </section>
    </>
  )
}
