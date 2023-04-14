import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaLink } from "react-icons/fa";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit min-h-[60vh] max-w-7xl flex max-lg:flex-col justify-center  items-center 
      gap-4 lg:gap-16 xl:gap-20 w-full mx-auto max-xl:px-10 py-10"
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover  max-xl:rounded-full max-lg:h-[150px] rounded-xl lg:h-[400px] w-fit max-w-xl"
      />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-3xl text-start max-lg:text-center gap-4 "
      >
        <h2 className="text-[3rem] xl:text-[4.5rem] leading-normal font-bold ">
          <div className="flex w-full max-lg:justify-center ">
            <p>Olá!</p>
            <span className="animate-bounce">👋</span>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p className="text-[1.6rem] xl:text-[1.8rem]  text-gray-300  max-w-sm lg:max-w-2xl max-lg:mx-auto">
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>

        <Link
          href="/projects"
          className="font-semibold  text-white  max-lg:mx-auto max-lg:text-md
            transition-all pt-4 flex items-center gap-3 underline hover:text-gray-300"
        >
          <p>Conheça mais </p> <FaArrowRight className="" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
