import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Links from "../helper/Links";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="flex fixed justify-around p-2 w-screen z-30 bg-[#1f1f1ffa] "
    >
      <Link href="#hero" className="flex justify-evenly items-center">
        <span className="headerBtn text-lg">Pedro Felippe</span>
      </Link>

      <nav className="flex justify-evenly items-center max-[673px]:hidden">
        <Links />
      </nav>
    </motion.header>
  );
}
