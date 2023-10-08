"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

function Nav() {
  const [linkSelected, setLinkSelected] = useState<null | string>("home");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex items-center justify-between backdrop-blur-md rounded-2xl bg-[#0004]">
      <motion.ul className="flex gap-4">
        <NavLink href="/">
          Home
          {linkSelected == "home" ? (
            <motion.div
              className="bg-[#fff0] w-full h-full backdrop-contrast-[300%] absolute top-0 left-0 rounded-2xl"
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
              className="bg-[#fff0] w-full h-full backdrop-contrast-200 absolute top-0 left-0 rounded-2xl"
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
      <button
        onClick={() => {
          document.querySelector("html").classList.toggle("dark");
          toggleDarkMode();
        }}
      >
        <motion.div className="cursor-pointer">
          {darkMode ? (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <motion.path
                d="M 43.81 29.354 C 43.688 28.958 43.413 28.626 43.046 28.432 C 42.679 28.238 42.251 28.198 41.854 28.321 C 36.161 29.886 30.067 28.272 25.894 24.096 C 21.722 19.92 20.113 13.824 21.683 8.133 C 21.848 7.582 21.697 6.985 21.29 6.578 C 20.884 6.172 20.287 6.022 19.736 6.187 C 10.659 8.728 4.691 17.389 5.55 26.776 C 6.408 36.163 13.847 43.598 23.235 44.451 C 32.622 45.304 41.28 39.332 43.816 30.253 C 43.902 29.96 43.9 29.647 43.81 29.354 Z"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 0, fill: "currentColor" }}
              />
            </motion.svg>
          ) : (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <motion.path cx="12" cy="12" r="10" stroke="none" fill="none" />
              <motion.path
                d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              />
              <motion.path
                d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                stroke-width="0"
                fill="currentColor"
              />
              <path
                d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                stroke-width="0"
                fill="currentColor"
              />
            </motion.svg>
          )}
        </motion.div>
      </button>
    </nav>
  );
}

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <motion.li className="px-2 py-1.5 hover:text-black hover:bg-[#fffc] rounded-2xl relative">
      <Link href={href}>{children}</Link>
    </motion.li>
  );
}

export default Nav;
