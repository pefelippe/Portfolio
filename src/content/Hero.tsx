import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit  max-w-7xl flex max-lg:flex-col justify-start items-center 
      gap-4 lg:gap-16 xl:gap-20 w-full mx-auto  p-10"
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-3xl text-start gap-4 "
      >
        <h2 className="text-[3rem] xl:text-[4.5rem] leading-normal font-bold ">
          <div className="flex w-full  ">
            <p>Olá!</p>
            <span className="animate-bounce">👋</span>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p className="text-[1.6rem] xl:text-[1.8rem]  text-gray-300  max-w-sm lg:max-w-2xl">
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>
      </motion.div>
    </motion.div>
  );
}
