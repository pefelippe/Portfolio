import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="fixed p-4 w-screen z-20 snap-center 
        backdrop-blur bg-[#fff] text-[#111]"
    >
      <nav className="mx-auto flex items-center justify-between w-9/12 ">
        <Link href="#hero">
          <span className="logoBtn text-2xl">pedrofelippe_</span>
        </Link>

        <Link className="headerBtn " href="#about">
          sobre mim
        </Link>
        <Link className="headerBtn" href="#about">
          skills
        </Link>
        <Link className="headerBtn " href="#experience">
          trabalhos
        </Link>
        <Link className="headerBtn " href="#contact">
          contato
        </Link>
      </nav>
    </motion.header>
  );
}
