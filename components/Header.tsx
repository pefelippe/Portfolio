import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 1.25 }}
      className="flex top-0 sticky justify-around py-6 mx-auto z-30"
    >
      <h2 className="text-white text-2xl font-medium headerBtn">
        <a href="#hero">Pedro Felippe</a>
      </h2>

      <div className="flex justify-evenly">
        <nav className="flex items-center max-md:hidden">
          <a className="headerBtn" href="#about">
            Sobre
          </a>
          <a className="headerBtn" href="#experience">
            Experiência
          </a>
          <a className="headerBtn" href="#contact">
            Contato
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
