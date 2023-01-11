import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import AboutIcons from "./atoms/AboutIcons";
import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" top-0 py-4 w-screen z-40 snap-center justify-start bg-[#151515]  text-[#FFFFFFDE] px-8">
      <motion.nav
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="mx-auto flex items-center justify-between max-w-7xl  "
      >
        <Link href="/">
          <span className="logoBtn">
            pedrofelippe<p className="animate-pulse">_</p>
          </span>
        </Link>
        <AboutIcons />
      </motion.nav>
    </header>
  );
}
