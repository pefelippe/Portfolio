import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import Links from "./Links";
import SocialIcons from "./SocialIcons";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="flex fixed justify-around p-2 w-screen z-40 snap-center text-white bg-[rgb(22,22,22)]"
    >
      <Link href="#hero" className="flex justify-evenly items-center">
        <span className="logoBtn text-lg">Pedro Felippe</span>
      </Link>

      <nav className="flex justify-evenly items-center max-[673px]:hidden">
        <Links />
      </nav>
    </motion.header>
  );
}
