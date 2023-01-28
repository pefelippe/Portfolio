import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "./../components/motion/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      className="relative  flex flex-col mx-auto 
     text-center  w-full  max-w-7xl justify-center items-center space-y-10"
    >
      <div
        className="space-y-6 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl 
         text-[4rem] sm:text-[5rem] xl:text-[6rem]  2xl:text-[6.5rem] "
      >
        <motion.h1
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full text-[#5865f2]"
        >
          Pedro Felippe
        </motion.h1>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[3rem] sm:text-[4rem] xl:text-[5rem]"
        >
          Web Developer{" "}
        </motion.p>

        <motion.p
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-[1.5rem] sm:text-[2rem] text-center text-[#a3a3a3]"
        >
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
        </motion.p>
      </div>
      {/* <AnimatedBtn
        className="w-fit text-lg font-semibold bg-[#3f4de9] rounded-lg"
        href="https://resume.io/r/m2cn8pnqu"
      >
        <div className="flex gap-2  p-3 ">
          <FaFilePdf className="h-7 w-7 text-[#fff] " />
          <p>Currículo</p>
        </div>
      </AnimatedBtn> */}
    </motion.div>
  );
}
