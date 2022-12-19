import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import Avatar from "../public/assets/desenho.png";

export default function Home() {
  return (
    <div className="component-base justify-center  items-center space-y-8">
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="https://avatars.githubusercontent.com/u/38574428?v=4"
        alt="pefelippe github avatar"
        className="object-fit relative sm:h-[350px] sm:w-[350px] h-[300px] w-[300px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <h1 className="flex text-7xl">Pedro Felippe</h1>
        <h2 className="flex text-4xl">Web Developer</h2>
      </motion.div>
      {/* <div className="flex flex-col  gap-4 pt-5 text-6xl space-y-5 text-center">
        </div> */}
      {/* <button
          className="absolute bottom-8  p-5 rounded-lg text-2xl w-[250px]
        bg-[#F7AB0A]/90 hover:bg-[#F7AB0A]/80 transition "
        >
          <a href="#about">Sobre mim</a>
        </button> */}
    </div>
  );
}
