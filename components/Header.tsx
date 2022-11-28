import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <motion.header
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.75 }}
        className="bg-[#161618] top-0 sticky flex flex-row p-4 z-20 content-center justify-around "
      >
        <div className="flex items-center justify-center">
          <button className="text-xl uppercase semibold text-gray-500 tracking-[5px]  ">
            <a href="#hero">PEFELIPPE.dev</a>
          </button>
        </div>

        <div className="flex flex-row text-gray-100 cursor-pointer ">
          <button className="headerBtn">
            <a href="#about">Sobre</a>
          </button>
          <button className="headerBtn">
            <a href="#experience">Experiência</a>
          </button>

          <button className="headerBtn">
            <a href="#skills">Skills</a>
          </button>
        </div>
      </motion.header>
    </>
  );
}
