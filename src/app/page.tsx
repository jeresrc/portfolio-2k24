import TextWithPopups from '@/components/TextWithPopups'
import ThisIsFine from '@/assets/imgs/this-is-fine.gif'
import CalmLogo from '@/assets/imgs/calm-logo.webp'
import AndgamesShot1 from '@/assets/imgs/andgames-shot-1.jpeg'
import AndgamesShot2 from '@/assets/imgs/andgames-shot-2.jpg'
import AndgamesShot3 from '@/assets/imgs/andgames-shot-3.jpg'
import AndgamesShot4 from '@/assets/imgs/andgames-shot-4.jpg'
import AndgamesShot404 from '@/assets/imgs/andgames-shot-404.jpg'
import RickAndMortyShot1 from '@/assets/imgs/rickandmorty-landing.jpeg'
import RickAndMortyShot2 from '@/assets/imgs/rickandmorty-shot-2.jpg'
import RickAndMortyShot3 from '@/assets/imgs/rickandmorty-shot-3.jpg'
import RickAndMortyShot5 from '@/assets/imgs/rickandmorty-shot-5.jpg'
import FPDesktop1 from '@/assets/imgs/fp-desktop-1.png'
import FPDesktop2 from '@/assets/imgs/fp-desktop-2.png'
import FPMobile1 from '@/assets/imgs/fp-mobile-1.png'
import FPMobile2 from '@/assets/imgs/fp-mobile-2.png'
import FPMobile3 from '@/assets/imgs/fp-mobile-3.png'
import FPCover from '@/assets/imgs/fp-cover.jpeg'
import Image from 'next/image'
import {
  Chip,
  DarkModeButton,
  LinkButton,
  Logos,
  LoopImagesGallery,
  AnimatedImage,
} from '@/components'

export default function Home() {
  return (
    <>
      <section className='flex flex-wrap justify-between' id='home'>
        <hgroup className='flex flex-col items-start justify-center'>
          <h1
            className='font-monaSans text-[4.1rem] font-[800] leading-none [font-stretch:200%] xs:text-8xl'
            id='home'
          >
            JERESC
          </h1>

          <h2 className='inline-block font-playfair text-4xl font-medium leading-none'>
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
        <div
          className='mt-4 flex h-fit max-w-sm flex-wrap items-start justify-start
          gap-2 fill-black dark:fill-white lg:mt-3 lg:justify-end'
        >
          <Chip blur='lg' variant='primary'>
            <a href='mailto:jeremiastomassrc@gmail.com'>
              jeremiastomassrc@gmail.com
            </a>
          </Chip>
          <Chip blur='lg' variant='primary'>
            <a href='https://github.com/jeresc' target='_blank'>
              GitHub
            </a>
          </Chip>
          <Chip blur='lg' variant='primary'>
            <a href='https://www.linkedin.com/in/jeresc' target='_blank'>
              LinkedIn
            </a>
          </Chip>
          <Chip blur='lg' variant='primary'>
            <a href='/CV_Full Stack Web Developer_Soruco Jeremias.pdf' download>
              CV
            </a>
          </Chip>
          <Chip blur='lg' variant='primary'>
            <DarkModeButton />
          </Chip>
        </div>
      </section>
      <section id='resume' className='mt-8'>
        <h2 className='mb-4 text-4xl font-[700] [font-stretch:100%]'>
          EXPERIENCE
        </h2>
        <ol className='relative pl-4'>
          <picture className='absolute top-0 -translate-x-1/2'>
            <Image
              src={CalmLogo.src}
              alt='Calm es simple logo'
              width={32}
              height={32}
            />
          </picture>
          <li className='flex pl-6'>
            <h3 className='text-2xl font-[800]'>Calm es simple</h3>
          </li>
          <li className='flex flex-col justify-center gap-2 border-l-[2px] border-[#bbb] pb-3 pl-6 dark:border-[#515151]'>
            <p className='mt-1 text-base font-normal leading-none'>
              Front End Web Developer
            </p>

            <Chip
              blur='lg'
              variant='primary'
              rounded='md'
              className='px-3 py-1.5'
            >
              <p className='text-base font-normal leading-none'>
                Aug 2023 to Sept 2023
              </p>
            </Chip>
          </li>

          <li className='relative flex border-l-[2px] border-[#bbb] pb-2 pl-6 dark:border-[#515151]'>
            <div
              className='absolute left-[-2px] top-0 mr-2 max-h-[0] 
              rounded-bl-sm border-b-[2px] border-l-[2px] border-[#bbb] px-2 py-1.5 dark:border-[#515151]'
            />
            <div className='flex flex-col'>
              <h4 className='text-lg font-bold'>Description</h4>
              <p className='text-base'>
                I was working as a Front End Web Developer in Calm es simple.
              </p>
            </div>
          </li>
          <li className='relative flex border-l-[2px] border-[#bbb] pb-3 pl-6 dark:border-[#515151]'>
            <div
              className='absolute left-[-2px] top-2 mr-2 max-h-[0] 
              rounded-bl-sm border-b-[2px]  border-l-[2px] border-[#bbb] px-2 py-2.5 dark:border-[#515151]'
            />
            <div
              className='mt-1 flex h-fit flex-wrap items-start justify-start gap-1.5
          fill-black dark:fill-white md:mt-3 md:justify-end'
            >
              <Chip blur='lg' variant='primary' rounded='md'>
                Typescript
              </Chip>
              <Chip blur='lg' variant='primary' rounded='md'>
                Nextjs
              </Chip>
              <Chip blur='lg' variant='primary' rounded='md'>
                Redux
              </Chip>
              <Chip blur='lg' variant='primary' rounded='md'>
                Responsive Design
              </Chip>
              <Chip blur='lg' variant='primary' rounded='md'>
                Git & GitHub
              </Chip>
            </div>
          </li>
          <li className='relative flex'>
            <div
              className='mr-2 max-h-[0] rounded-bl-sm border-b-[2px] border-l-[2px] 
              border-[#bbb] px-2 py-2.5 dark:border-[#515151]'
            />
            <LinkButton
              href='https://calmessimple.com.ar/'
              text='See website'
              rounded='lg'
            />
          </li>
        </ol>
      </section>
      <section className='mt-8 flex flex-col gap-2'>
        <h2 className='text-4xl font-[700] [font-stretch:100%]'>PROJECTS</h2>
        <article className='project'>
          <figure>
            <LoopImagesGallery
              images={[
                <AnimatedImage
                  src={FPCover.src}
                  alt='Franco Pisso project cover image'
                  priority={true}
                  isCover={true}
                  key={1}
                />,
                <AnimatedImage
                  src={FPDesktop1.src}
                  alt='Franco Pisso project desktop screenshot'
                  key={2}
                />,
                <AnimatedImage
                  src={FPMobile1.src}
                  alt='Franco Pisso project mobile screenshots'
                  key={3}
                />,
                <AnimatedImage
                  src={FPMobile2.src}
                  alt='Franco Pisso project course page mobile screenshot'
                  key={5}
                />,

                <AnimatedImage
                  src={FPDesktop2.src}
                  alt='Franco Pisso project course page desktop screenshot'
                  key={4}
                />,
                <AnimatedImage
                  src={FPMobile3.src}
                  alt='Franco Pisso project home page mobile screenshot'
                  key={5}
                />,
              ]}
            />
          </figure>
          <section className='project__info'>
            <header>
              <h2>Franco Pisso</h2>
              <Logos names={['Nextjs', 'FramerMotion', 'Zustand']} />
            </header>
            <div>
              <LinkButton
                href='https://francopisso.vercel.app/'
                text='See website'
              />
            </div>
            <p>
              This is a modern website developed with Next.js, featuring smooth
              animations powered by Framer Motion and efficient state management
              through Zustand. This platform provides up-to-date information on
              Professor Franco Pisso&apos;s books and oratory courses.
            </p>
          </section>
        </article>
        <article className='project mt-6'>
          <figure>
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
          </figure>
          <section className='project__info'>
            <header>
              <h2>&games</h2>
              <Logos names={['React', 'Redux', 'Express', 'Jest', 'Cypress']} />
            </header>
            <div>
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
          </section>
        </article>
        <article className='project mt-6'>
          <figure>
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
          </figure>
          <section className='project__info'>
            <header>
              <h2>Rick And Morty</h2>
              <Logos names={['React', 'Redux', 'Vite']} />
            </header>
            <div>
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
          </section>
        </article>
      </section>
    </>
  )
}
