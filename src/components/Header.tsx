import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
      className=" fixed p-5 w-screen z-20 snap-center text-[#EDEAEF] bg-[#131313] "
    >
      <nav className="flex justify-around">
        <div>
          <Link href="#hero" className="flex items-center">
            <span className="logoBtn text-xl">pedrofelippe_</span>
          </Link>
        </div>

        <div className="flex items-center max-[673px]:hidden">
          <Link className="headerBtn" href="#about">
            Sobre
          </Link>
          <Link className="headerBtn" href="#about">
            Skills
          </Link>
          <Link className="headerBtn" href="#experience">
            Experiência
          </Link>
          <Link className="headerBtn" href="#contact">
            Contato
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
