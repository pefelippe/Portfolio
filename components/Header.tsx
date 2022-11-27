import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <header className="bg-[#161618] top-0 sticky flex flex-row-reverse p-5 z-20">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1.25 }}
          className="flex flex-row text-gray-100 cursor-pointer"
        >
          <button className="headerBtn">
            <a href="#hero"> Home </a>
          </button>
          <button className="headerBtn">
            <a href="#about"> Sobre </a>
          </button>
          <button className="headerBtn">
            <a href="#hero">Experiência</a>
          </button>

          <button className="headerBtn">
            <a href="#hero">Projetos</a>
          </button>
        </motion.div>
      </header>
    </>
  );
}
