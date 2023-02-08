import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      className="p-[30px] flex items-center justify-center xl:justify-between mx-auto
     w-full max-w-7xl  text-center xl:text-left "
    >
      <div
        className="space-y-6  text-4xl font-bold tracking-tight text-white sm:text-6xl 
         text-[4rem] sm:text-[5rem] xl:text-[6rem]  2xl:text-[7.5rem] "
      >
        <motion.h1
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full text-[#5865f2]"
        >
          Pedro Felippe
        </motion.h1>

        <motion.p
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[3rem] sm:text-[4rem] xl:text-[5rem]"
        >
          Web Developer{" "}
        </motion.p>

        <motion.p
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="text-[1.5rem] sm:text-[2rem]  text-[#a3a3a3]"
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
    </motion.div>
  );
}
