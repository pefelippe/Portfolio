import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

const wordsList = ["Amante de café.tsx"];
const heroDescription =
  "Sou um desenvolvedor web, amante de filmes e e fascinado por tecnologia.";

export default function About() {
  const [text] = useTypewriter({
    words: wordsList,
    loop: 0,
    typeSpeed: 75,
  });

  return (
    <motion.div className="flex mx-auto flex-col h-fit  max-w-5xl w-full max-lg:px-8 gap-4">
      <h2
        className="flex text-[1.8rem]  font-medium 
       items-center text-gray-500"
      >
        {text}
        <Cursor cursorColor="blue" />
      </h2>

      <h2
        className="flex text-[3.5rem]  font-bold w-fit
       items-center text-white gap-3"
      >
        <p>Olá! Eu sou </p>
        <h1 className="text-blue"> Pedro Felippe </h1>.
      </h2>

      <p className="flex text-[1.2rem] md:text-[1.5rem] text-gray-300  max-w-2xl ">
        {heroDescription}
      </p>

      <SocialLinks />
    </motion.div>
  );
}
