"use client";

import {motion} from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export function NavLink({children, href}: NavLinkProps) {
  return (
    <motion.li className="relative rounded-2xl px-2 py-1.5">
      <Link className="relative" href={href}>
        {children}
      </Link>
    </motion.li>
  );
}
