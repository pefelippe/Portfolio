import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-fit max-w-5xl flex max-lg:flex-col justify-center items-center gap-4 lg:gap-16  w-full mx-auto"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover max-lg:hidden  rounded-md max-lg:h-[180px] max-lg:rounded-full lg:h-[300px] xl:h-[400px] w-fit max-w-xl"
      />

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="text-white  flex flex-col text-3xl text-start max-lg:text-center  mx-auto"
      >
        <h2 className="text-[3.5rem] leading-normal font-bold max-w-sm lg:max-w-xl mx-auto">
          <div className="flex w-full max-lg:justify-center ">
            <p>Olá!</p>
            <span className="animate-bounce">👋</span>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p className="text-[1.5rem] lg:text-[2rem] text-gray-300 pt-2 max-w-sm lg:max-w-xl mx-auto">
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>
        <div className="w-full flex  max-md:flex-col gap-4 pt-8  text-2xl font-medium max-lg:mx-auto">
          <Link
            href="/projects"
            className=" bg-blue text-white min-w-[200px] py-4 px-8 rounded-md max-md:w-full hover:underline hover:bg-blue/80 transition-all"
          >
            Meus Projetos
          </Link>
          <Link
            href="/contact"
            className=" border-2 border-blue min-w-[200px] py-4 px-8 rounded-md max-md:w-full hover:underline  transition-all"
          >
            Entre em contato
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
