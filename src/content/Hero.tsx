import { motion } from "framer-motion";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="relative  flex flex-col mx-auto 
     text-center  w-full  max-w-7xl justify-center items-center space-y-10"
    >
      <div
        className="space-y-6 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl 
         text-[4rem] sm:text-[5rem] xl:text-[6rem]  2xl:text-[6.5rem] "
      >
        <h1 className="w-full text-[#5865f2]">Pedro Felippe</h1>

        <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem]">
          Web Developer{" "}
        </p>

        <p className="text-[1.5rem] sm:text-[2rem] text-center text-[#a3a3a3]">
          <Typewriter
            words={[
              "ViciadoEmCafé.tsx",
              "Tailwind <3",
              "i write coffe code and drink javascript",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </p>
      </div>
    </motion.div>
  );
}
