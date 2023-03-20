import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto w-full flex justify-start max-lg:justify-center gap-8 lg:gap-32 max-lg:flex-col
       items-center max-w-7xl text-white min-h-[40vh] "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-fit flex flex-col gap-6 items-center text-center  mx-auto"
      >
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-md tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3]"
        >
          <Typewriter
            words={[
              "SOFTWARE ENGINEER",
              "Tailwind <3",
              "i write coffe",
              "i drink javascript",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </motion.p>
        <p
          className="text-[#fff]  uppercase font-bold mx-auto
        text-4xl sm:text-5xl lg:text-7xl underline decoration-[#5865f2]
        "
        >
          Pedro Felippe
        </p>

        <p className="w-full flex flex-col h-full  text-[1.2rem]  text-gray-300 max-w-xl mx-auto">
          Sou um Web Developer com mais de três anos de experiência em construir
          soluções de qualidade para web.
        </p>

        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
