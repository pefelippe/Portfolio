import { motion } from "framer-motion";
import React from "react";

import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center w-full max-w-4xl mx-auto items-center h-fit"
    >
      <h2 className="text-[3.3rem] md:text-[4.5rem] font-bold  justify-center text-center  items-center">
        <div className="flex w-full justify-center items-center ">
          <p>Olá!</p>
          <p className="animate-bounce ">👋</p>
        </div>
        Eu sou <span className="text-blue ">Pedro Felippe</span>
      </h2>

      <p
        className="text-[1.6rem] md:text-[2rem]  text-gray-500 justify-center
          max-w-xl w-fit text-center "
      >
        Sou um Web Developer, amante de filmes e fascinado por tecnologia.
      </p>
      <div className="pt-6">
        <SocialLinks />
      </div>
    </motion.div>
  );
}
