import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFileDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className=" fixed p-2 w-screen z-40 snap-center text-white bg-[#141414]"
    >
      <nav className="flex justify-around">
        <Link href="#hero" className="flex items-center">
          <span className="logoBtn text-xl">pedrofelippe_</span>
        </Link>

        <div className="flex items-center max-[673px]:hidden">
          <Link className="headerBtn" href="#about">
            sobre
          </Link>
          <Link className="headerBtn" href="#about">
            skills
          </Link>
          <Link className="headerBtn" href="#experience">
            experiência
          </Link>
          <Link className="headerBtn" href="#projects">
            projetos
          </Link>
          <Link className="headerBtn" href="#contact">
            contato
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
