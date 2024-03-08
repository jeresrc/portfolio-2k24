import React from "react";
import {EnvelopeClosedIcon} from "@radix-ui/react-icons";

import {Chip} from ".";

export function Footer() {
  return (
    <footer className="w-full gap-4 border-t-[1px] border-t-border py-[7px]">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        <div className="flex max-h-[31px] gap-2 [&_div]:h-[31px]">
          <a
            href="mailto:jeremiastomassrc@gmail.com"
            // className='mb-0.5 ml-1 h-6.5'
          >
            <Chip variant="primary">
              <EnvelopeClosedIcon height={20} width={20} />
              <span className="sr-only">Email: jeremiastomassrc@gmail.com</span>
            </Chip>
          </a>
          <a
            className="hidden xs:block"
            href="https://github.com/jeresc"
            rel="noopener"
            target="_blank"
          >
            <Chip variant="primary">GitHub</Chip>
          </a>
          <a
            className="hidden sm:block"
            href="https://www.linkedin.com/in/jeresc"
            rel="noopener"
            target="_blank"
          >
            <Chip variant="primary">LinkedIn</Chip>
          </a>
          <a
            download
            className="hidden 2xs:block"
            href="/CV_Full Stack Web Developer_Soruco Jeremias.pdf"
          >
            <Chip variant="primary">CV</Chip>
          </a>
        </div>
        <p className="ml-auto">© {new Date().getFullYear()} Jeremias Soruco</p>
      </div>
    </footer>
  );
}
