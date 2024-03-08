"use client";
import React from "react";

import {
  AstroLogo,
  CypressLogo,
  ExpressLogo,
  FramerMotionLogo,
  JestLogo,
  JsLogo,
  NextjsLogo,
  NodejsLogo,
  ReactLogo,
  ReduxLogo,
  TsLogo,
  ViteLogo,
  ZustandLogo,
} from "@/assets/svg";

import {TooltipGroup} from "./tooltip-group";
import {Tooltip} from "./tooltip";

type ILogos = Record<string, JSX.Element>;

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
  Zustand: <ZustandLogo />,
  FramerMotion: <FramerMotionLogo />,
};

interface LogosProps {
  names: string[];
}

export function Logos({names}: LogosProps) {
  return (
    <div
      className="flex h-fit w-fit justify-start gap-2
      rounded-2xl border-[1px] border-[#0004] px-2 py-1 dark:border-[#fff4]"
    >
      <p className="sr-only">Tech stack used:</p>
      <TooltipGroup>
        {names.map((logo) => (
          <Tooltip
            key={logo}
            content={logo.replace(/([A-Z])/g, " $1").trim()}
            hideDelay={10}
            showDelay={300}
          >
            <div className="h-6 w-6 fill-black dark:fill-white">
              {logos[logo]}
              <span className="sr-only">{logo.replace(/([A-Z])/g, " $1").trim()}</span>
            </div>
          </Tooltip>
        ))}
      </TooltipGroup>
    </div>
  );
}
