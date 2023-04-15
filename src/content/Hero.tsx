import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit min-h-[70vh] max-w-7xl flex flex-col justify-center items-center  w-full mx-auto  max-xl:px-10"
    >
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className=" object-cover w-fit max-md:max-h-[180px] max-h-[200px] rounded-full "
      />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col text-3xl text-center gap-4 "
      >
        <h2 className="text-[3rem] xl:text-[4.5rem] leading-normal font-bold mx-auto">
          <div className="flex justify-center items-center mx-auto">
            <p className="">Olá!</p>
            <span className="animate-bounce">👋</span>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p className="text-[1.3rem] xl:text-[1.8rem]  text-gray-300  max-w-sm lg:max-w-2xl">
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>
      </motion.div>
    </motion.div>
  );
}
