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
      className="fixed p-5 w-screen z-40 snap-center 
       text-[#fff] overflow-hidden bg-[#121212] bg-opacity-90"
    >
      <nav className="mx-auto flex items-center justify-between w-9/12 ">
        <Link href="#hero">
          <span className="logoBtn text-2 xl flex hover:text-[#F7AB0A]">
            <p className="animate-pulse">_</p>pedrofelippe
          </span>
        </Link>

        <div>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#hero">
            Home
          </Link>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#about">
            Sobre
          </Link>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#skills">
            Skills
          </Link>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#experience">
            Experiência
          </Link>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#contact">
            Contato
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
