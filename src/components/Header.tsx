import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className="absolute top-0  p-5 w-screen z-40 snap-center justify-start 
       text-[#fff]  "
    >
      <nav className="mx-auto flex items-center justify-between max-w-7xl ">
        <Link href="#hero">
          <span className="logoBtn text-2 xl flex hover:text-[#F7AB0A]">
            <p className="animate-pulse">_</p>pedrofelippe
          </span>
        </Link>

        <div>
          <Link className="headerBtn hover:text-[#F7AB0A]" href="#about">
            Quem sou eu
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
        <nav className="flex justify-center items-center gap-10 ">
          <a href="#" className="">
            <FaGithub className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
          <a href="#" className="">
            <FaLinkedinIn className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
          <a href="#" className="">
            <FaInstagram className="h-6 w-6  hover:text-[#F7AB0A]" />
          </a>
        </nav>
      </nav>
    </motion.header>
  );
}
