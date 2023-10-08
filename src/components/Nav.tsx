"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>("home");

  return (
    <nav className="flex items-center justify-between px-1 backdrop-blur-md rounded-2xl bg-[#0004]">
      <motion.ul className="flex gap-4">
        <NavLink href="/" selected={linkSelected == "home"}>
          Home
          {linkSelected == "home" ? (
            <motion.div
              className="bg-[#fff0] w-full h-full backdrop-contrast-200 absolute top-0 left-0 rounded-2xl"
              layoutId="selected"
            />
          ) : (
            ""
          )}
        </NavLink>
        <NavLink href="#projects">
          Projects
          {linkSelected == "projects" ? (
            <motion.div
              className="bg-[#0000] w-full h-full backdrop-contrast-200 backdrop-saturate-200 absolute top-0 left-0 rounded-2xl"
              layoutId="selected"
            />
          ) : (
            ""
          )}
        </NavLink>
        <NavLink href="#contact">
          Contact
          {linkSelected == "contact" ? (
            <motion.div
              className="bg-[#fff0] w-full h-full backdrop-invert absolute top-0 left-0 rounded-2xl"
              layoutId="selected"
            />
          ) : (
            ""
          )}
        </NavLink>
      </motion.ul>
      <button
        onClick={() =>
          setLinkSelected(linkSelected == "home" ? "projects" : "home")
        }
      >
        A
      </button>
      <button
        onClick={() =>
          setLinkSelected(linkSelected == "home" ? "contact" : "home")
        }
      >
        B
      </button>
    </nav>
  );
}

function NavLink({
  children,
  href,
  selected,
}: {
  children: React.ReactNode;
  href: string;
  selected: boolean;
}) {
  return (
    <motion.li className="px-2 py-1.5 hover:text-black hover:bg-[#fffc] rounded-2xl relative">
      <Link href={href}>{children}</Link>
    </motion.li>
  );
}

export default Nav;
