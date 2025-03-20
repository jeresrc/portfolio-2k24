import Image from "next/image";

import TextWithPopups from "@/components/TextWithPopups";
import ThisIsFine from "@/assets/imgs/this-is-fine.gif";
import CalmLogo from "@/assets/imgs/calm-logo.webp";
import AndgamesShot1 from "@/assets/imgs/andgames-shot-1.jpeg";
import AndgamesShot2 from "@/assets/imgs/andgames-shot-2.jpg";
import AndgamesShot3 from "@/assets/imgs/andgames-shot-3.jpg";
import AndgamesShot4 from "@/assets/imgs/andgames-shot-4.jpg";
import AndgamesShot404 from "@/assets/imgs/andgames-shot-404.jpg";
import RickAndMortyShot1 from "@/assets/imgs/rickandmorty-landing.jpeg";
import RickAndMortyShot2 from "@/assets/imgs/rickandmorty-shot-2.jpg";
import RickAndMortyShot3 from "@/assets/imgs/rickandmorty-shot-3.jpg";
import RickAndMortyShot5 from "@/assets/imgs/rickandmorty-shot-5.jpg";
import FPDesktop1 from "@/assets/imgs/fp-desktop-1.png";
import FPDesktop2 from "@/assets/imgs/fp-desktop-2.png";
import FPMobile1 from "@/assets/imgs/fp-mobile-1.png";
import FPMobile2 from "@/assets/imgs/fp-mobile-2.png";
import FPMobile3 from "@/assets/imgs/fp-mobile-3.png";
import FPCover from "@/assets/imgs/fp-cover.jpeg";
import {
  Chip,
  DarkModeButton,
  LinkButton,
  Logos,
  LoopImagesGallery,
  AnimatedImage,
} from "@/components";

export default function Home() {
  return (
    <>
      <section className="flex flex-wrap justify-between" id="home">
        <hgroup className="flex flex-col items-start justify-center">
          <h1
            className="font-monaSans text-[4.1rem] font-[800] leading-none [font-stretch:200%] xs:text-8xl"
            id="home"
          >
            JERESRC
          </h1>

          <h2 className="inline-block font-playfair text-4xl font-medium leading-none">
            <TextWithPopups
              left={
                <Image
                  alt="dev"
                  className="h-full w-full object-cover"
                  height={20}
                  quality={10}
                  src={ThisIsFine.src}
                  width={20}
                />
              }
              right="How 'about you?"
              text="Junior"
              variant="red-orange"
            />
            {" Front End Web "}
            <TextWithPopups
              left="New Stuff"
              right="Sample Text"
              text="Developer"
              variant="orange-yellow"
            />
          </h2>
        </hgroup>
        <div
          className="mt-4 flex h-fit max-w-sm flex-wrap items-start justify-start
          gap-2 fill-black dark:fill-white lg:mt-3 lg:justify-end"
        >
          <a href="mailto:jeremiastomassrc@gmail.com">
            <Chip blur="lg" variant="primary">
              jeremiastomassrc@gmail.com
            </Chip>
          </a>
          <a href="https://github.com/jeresc" rel="noopener" target="_blank">
            <Chip blur="lg" variant="primary">
              GitHub
            </Chip>
          </a>
          <a href="https://www.linkedin.com/in/jeresrc" rel="noopener" target="_blank">
            <Chip blur="lg" variant="primary">
              LinkedIn
            </Chip>
          </a>
          <a download href="/CV_Full Stack Web Developer_Soruco Jeremias.pdf">
            <Chip blur="lg" variant="primary">
              CV
            </Chip>
          </a>
          <Chip blur="lg" variant="primary">
            <DarkModeButton />
          </Chip>
        </div>
      </section>
      <section className="mt-8" id="resume">
        <h2 className="mb-4 text-4xl font-[700] [font-stretch:100%]">EXPERIENCE</h2>
        <ol className="relative pl-4">
          <picture className="absolute top-0 -translate-x-1/2">
            <Image alt="Calm es simple logo" height={32} src={CalmLogo.src} width={32} />
          </picture>
          <li className="flex pl-6">
            <h3 className="text-2xl font-[800]">Calm es simple</h3>
          </li>
          <li className="flex flex-col justify-center gap-2 border-l-[2px] border-[#bbb] pb-3 pl-6 dark:border-[#515151]">
            <p className="mt-1 text-base font-normal leading-none">Front End Web Developer</p>

            <Chip blur="lg" className="px-3 py-1.5" rounded="md" variant="primary">
              <p className="text-base font-normal leading-none">Aug 2023 to Sept 2023</p>
            </Chip>
          </li>

          <li className="relative flex border-l-[2px] border-[#bbb] pb-2 pl-6 dark:border-[#515151]">
            <div
              className="absolute left-[-2px] top-0 mr-2 max-h-[0] 
              rounded-bl-sm border-b-[2px] border-l-[2px] border-[#bbb] px-2 py-1.5 dark:border-[#515151]"
            />
            <div className="flex max-w-[920px] flex-col text-pretty">
              <h4 className="text-lg font-bold">Description</h4>
              <p className="text-base font-normal">
                During my intership in Calm, I specialized in creating <b>responsive</b> page
                layouts, using Figma and Notion for design and documentation. I also focused on
                implementing <b>SEO</b> strategies to boost search engine visibility. Working within
                Agile methodologies, specifically <b>SCRUM</b>, I collaborated closely with the team
                to prioritize tasks and meet project milestones efficiently, enhancing my skills in
                front-end development and adapting to fast-paced, collaborative environments.
              </p>
            </div>
          </li>
          <li className="relative flex border-l-[2px] border-[#bbb] pb-3 pl-6 dark:border-[#515151]">
            <div
              className="absolute left-[-2px] top-2 mr-2 max-h-[0] 
              rounded-bl-sm border-b-[2px]  border-l-[2px] border-[#bbb] px-2 py-2.5 dark:border-[#515151]"
            />
            <div
              className="mt-1 flex h-fit flex-wrap items-start justify-start gap-1.5
          fill-black dark:fill-white md:mt-3 md:justify-end"
            >
              <Chip blur="lg" rounded="md" variant="primary">
                Typescript
              </Chip>
              <Chip blur="lg" rounded="md" variant="primary">
                Nextjs
              </Chip>
              <Chip blur="lg" rounded="md" variant="primary">
                Redux
              </Chip>
              <Chip blur="lg" rounded="md" variant="primary">
                Responsive Design
              </Chip>
              <Chip blur="lg" rounded="md" variant="primary">
                Git & GitHub
              </Chip>
            </div>
          </li>
          <li className="relative flex">
            <div
              className="mr-2 max-h-[0] rounded-bl-sm border-b-[2px] border-l-[2px] 
              border-[#bbb] px-2 py-2.5 dark:border-[#515151]"
            />
            <LinkButton href="https://calmessimple.com.ar/" rounded="lg" text="See website" />
          </li>
        </ol>
      </section>
      <section className="mt-8 flex flex-col gap-2">
        <h2 className="text-4xl font-[700] [font-stretch:100%]">PROJECTS</h2>
        <article className="project">
          <figure>
            <LoopImagesGallery
              images={[
                <AnimatedImage
                  key={1}
                  isCover
                  priority
                  alt="Franco Pisso project cover image"
                  src={FPCover.src}
                />,
                <AnimatedImage
                  key={2}
                  alt="Franco Pisso project desktop screenshot"
                  src={FPDesktop1.src}
                />,
                <AnimatedImage
                  key={3}
                  alt="Franco Pisso project mobile screenshots"
                  src={FPMobile1.src}
                />,
                <AnimatedImage
                  key={5}
                  alt="Franco Pisso project course page mobile screenshot"
                  src={FPMobile2.src}
                />,

                <AnimatedImage
                  key={4}
                  alt="Franco Pisso project course page desktop screenshot"
                  src={FPDesktop2.src}
                />,
                <AnimatedImage
                  key={5}
                  alt="Franco Pisso project home page mobile screenshot"
                  src={FPMobile3.src}
                />,
              ]}
            />
          </figure>
          <section className="project__info">
            <header>
              <h2>Franco Pisso</h2>
              <Logos names={["Nextjs", "FramerMotion", "Zustand"]} />
            </header>
            <div>
              <LinkButton href="https://francopisso.vercel.app/" text="See website" />
            </div>
            <p>
              This is a modern website developed with Next.js, featuring smooth animations powered
              by Framer Motion and efficient state management through Zustand. This platform
              provides up-to-date information on Professor Franco Pisso&apos;s books and oratory
              courses.
            </p>
          </section>
        </article>
        <article className="project mt-6">
          <figure>
            <LoopImagesGallery
              images={[
                <AnimatedImage
                  key={1}
                  isCover
                  priority
                  alt="andgames project Landing page screenshot"
                  src={AndgamesShot1.src}
                />,
                <AnimatedImage
                  key={2}
                  alt="andgames project Home desktop screenshot"
                  src={AndgamesShot2.src}
                />,
                <AnimatedImage
                  key={3}
                  alt="andgames project Home mobile screenshot"
                  src={AndgamesShot3.src}
                />,
                <AnimatedImage
                  key={4}
                  alt="andgames project loading Home desktop screenshot"
                  src={AndgamesShot4.src}
                />,
                <AnimatedImage
                  key={5}
                  alt="andgames project loading Home desktop screenshot"
                  src={AndgamesShot404.src}
                />,
              ]}
            />
          </figure>
          <section className="project__info">
            <header>
              <h2>&games</h2>
              <Logos names={["React", "Redux", "Express", "Jest", "Cypress"]} />
            </header>
            <div>
              <LinkButton href="https://andgames.jeresrc.com" text="Live Demo" />
              <LinkButton href="https://github.com/jeresrc/andgames" text="Source Code" />
            </div>
            <p>
              Experience a feature-rich Single Page Application (SPA) frontend crafted with React,
              Redux Toolkit, and Styled Components, enhanced with Cloudinary for seamless image
              management. Fetching data from the rawg.io API, it also boasts its own database for
              storing new games.
            </p>
          </section>
        </article>
        <article className="project mt-6">
          <figure>
            <LoopImagesGallery
              images={[
                <AnimatedImage
                  key={1}
                  isCover
                  priority
                  alt="andgames project Landing page screenshot"
                  src={RickAndMortyShot1.src}
                />,
                <AnimatedImage
                  key={2}
                  alt="andgames project Home desktop screenshot"
                  src={RickAndMortyShot2.src}
                />,
                <AnimatedImage
                  key={3}
                  alt="andgames project Home mobile screenshot"
                  src={RickAndMortyShot3.src}
                />,
                <AnimatedImage
                  key={4}
                  alt="andgames project loading Home desktop screenshot"
                  src={RickAndMortyShot5.src}
                />,
              ]}
            />
          </figure>
          <section className="project__info">
            <header>
              <h2>Rick And Morty</h2>
              <Logos names={["React", "Redux", "Vite"]} />
            </header>
            <div>
              <LinkButton href="https://jeresrc.github.io/rick-and-morty-app" text="Live Demo" />
              <LinkButton href="https://github.com/jeresrc/rick-and-morty-app" text="Source Code" />
            </div>
            <p>
              Discover a single-page application created with React, Redux, and Vite, showcasing the
              vibrant world of Rick and Morty. Explore random characters, select by ID, and favorite
              your top picks for an immersive experience.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
