import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto w-full flex justify-start max-lg:justify-center gap-8 lg:gap-32 max-lg:flex-col
       items-center max-w-7xl text-white min-h-[50vh] "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-fit flex flex-col gap-6 items-start text-center  mx-auto"
      >
        <p
          className="text-[#fff]  uppercase font-bold mx-auto
        text-4xl md:text-5xl lg:text-7xl 
        "
        >
          Pedro Felippe
        </p>

        <p className="w-full flex flex-col h-full  text-[1.2rem]  text-gray-100 max-w-xl mx-auto">
          Sou um Web Developer com mais de três anos de experiência em construir
          soluções de qualidade para web.
        </p>

        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
