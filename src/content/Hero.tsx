import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-fit max-w-7xl flex max-lg:flex-col justify-center mx-auto items-center lg:gap-20 w-full"
    >
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover rounded-md max-lg:hidden xl:h-[400px] "
      />
      <motion.div className="text-white  flex flex-col text-3xl text-start">
        <h2 className="text-[3rem] md:text-[4rem] leading-tight font-bold max-w-xl">
          Olá! Sou <span className="text-blue">Pedro Felippe</span> e sou um Web
          Developer.
        </h2>

        <p className="text-lg font-normal md:text-3xl text-gray-300 dark:text-slate-500 max-w-md md:max-w-lg pt-2">
          <Typewriter
            words={[
              "Sou um desenvolvedor Javascript, amante de filmes e fascinado por tecnologia.",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={25}
            delaySpeed={2000}
          />
        </p>
      </motion.div>
    </motion.div>
  );
}
