import { motion } from "framer-motion";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.div
      className="relative px-6 mx-auto  w-full flex flex-col items-center  min-h-[50vh]
      justify-center text-center shadow-md text-[#fff]"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col items-center justify-center md:gap-4"
      >
        <motion.p
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[22px] tracking-[2.2px] font-semibold text-center uppercase text-[#a3a3a3]"
        >
          <Typewriter
            words={[
              "Web Developer",
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

        <motion.img
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[180px] transition-all shadow-md object-cover border-1 border-[#121212]"
        />
        <p
          className="text-[#5865f2] text-center uppercase font-bold 
        text-[2.5rem] tracking-tighter text-black lg:text-6xl"
        >
          Pedro Felippe
        </p>

        <p className=" text-[1.4rem] max-w-2xl text-gray-300">
          Sou um{" "}
          <span className="text-[#5865f2]  font-semibold">Web Developer</span>{" "}
          com mais de três anos de experiência em construir soluções inovadoras
          na web.
        </p>

        <button className="mt-4 w-full max-w-sm p-4 rounded-xl font-semibold transition-all text-[#fff] text-xl bg-[#5865f2]  hover:bg-[#5865f2]/70">
          Currículo
        </button>
      </motion.div>
    </motion.div>
  );
}
