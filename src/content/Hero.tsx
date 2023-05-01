import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

const wordsList = ["Pedro Felippe", "Web Developer", "Amante de café.tsx"];
const heroDescription =
  "Sou um desenvolvedor web, amante de filmes e e fascinado por tecnologia.";

export default function About() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div className="flex mx-auto flex-col h-fit w-fit justify-center items-center  ">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-contain max-h-[120px] md:max-h-[180px] shadow-md
        rounded-full flex "
      />

      <h2
        className="flex text-[3rem] md:text-[3.5rem] font-bold 
       justify-center text-center items-center "
      >
        {text}
        <Cursor cursorColor="blue" />
      </h2>

      <p className="flex text-[1.2rem] text-gray-500 max-w-sm md:max-w-md  text-center">
        {heroDescription}
      </p>
    </motion.div>
  );
}
