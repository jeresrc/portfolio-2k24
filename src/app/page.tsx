import TextWithPopups from '@/components/TextWithPopups'
import ThisIsFine from '@/assets/imgs/this-is-fine.gif'
import AndgamesShot1 from '@/assets/imgs/andgames-shot-1.jpeg'
import AndgamesShot2 from '@/assets/imgs/andgames-shot-2.jpg'
import AndgamesShot3 from '@/assets/imgs/andgames-shot-3.jpg'
import AndgamesShot4 from '@/assets/imgs/andgames-shot-4.jpg'
import AndgamesShot404 from '@/assets/imgs/andgames-shot-404.jpg'
import RickAndMortyShot1 from '@/assets/imgs/rickandmorty-landing.jpeg'
import RickAndMortyShot2 from '@/assets/imgs/rickandmorty-shot-2.jpg'
import RickAndMortyShot3 from '@/assets/imgs/rickandmorty-shot-3.jpg'
import RickAndMortyShot5 from '@/assets/imgs/rickandmorty-shot-5.jpg'
import Image from 'next/image'
import Chip from '@/components/Chip'
import DarkModeButton from '@/components/DarkModeButton'
import LoopImagesGallery from '@/components/LoopImagesGallery'
import LinkButton from '@/components/LinkButton'
import AnimatedImage from '@/components/AnimatedImage'

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
                  width={20}
                  height={20}
                  quality={10}
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
        <h2 className='mt-6 text-4xl font-[800] [font-stretch:100%]'>
          EXPERIENCE
        </h2>
      </section>
      <section>
        <h2 className='mt-6 text-4xl font-[800] [font-stretch:100%]'>
          PROJECTS
        </h2>

        <article className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <LoopImagesGallery
            images={[
              <AnimatedImage
                src={AndgamesShot1.src}
                alt='andgames project Landing page screenshot'
                priority={true}
                isCover={true}
                key={1}
              />,
              <AnimatedImage
                src={AndgamesShot2.src}
                alt='andgames project Home desktop screenshot'
                key={2}
              />,
              <AnimatedImage
                src={AndgamesShot3.src}
                alt='andgames project Home mobile screenshot'
                key={3}
              />,
              <AnimatedImage
                src={AndgamesShot4.src}
                alt='andgames project loading Home desktop screenshot'
                key={4}
              />,
              <AnimatedImage
                src={AndgamesShot404.src}
                alt='andgames project loading Home desktop screenshot'
                key={5}
              />,
            ]}
          />
          <div className='flex w-full flex-col items-start justify-center gap-3'>
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
        <article className='mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2'>
          <div className='order-2 flex flex-col items-start justify-center gap-3 lg:order-[-1] lg:items-end lg:text-right'>
            <h2 className='text-3xl font-[800] [font-stretch:200%]'>
              Rick And Morty
            </h2>
            <div className='flex gap-2'>
              <LinkButton
                href='https://jeresc.github.io/rick-and-morty-app'
                text='Live Demo'
              />
              <LinkButton
                href='https://github.com/jeresc/rick-and-morty-app'
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
          <LoopImagesGallery
            images={[
              <AnimatedImage
                src={RickAndMortyShot1.src}
                isCover={true}
                priority={true}
                alt='andgames project Landing page screenshot'
                key={1}
              />,
              <AnimatedImage
                src={RickAndMortyShot2.src}
                alt='andgames project Home desktop screenshot'
                key={2}
              />,
              <AnimatedImage
                src={RickAndMortyShot3.src}
                alt='andgames project Home mobile screenshot'
                key={3}
              />,
              <AnimatedImage
                src={RickAndMortyShot5.src}
                alt='andgames project loading Home desktop screenshot'
                key={4}
              />,
            ]}
          />
        </article>
      </section>
    </>
  )
}
