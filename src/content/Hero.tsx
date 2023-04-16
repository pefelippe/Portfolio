import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full min-h-fit h-screen  mx-auto max-w-7xl flex max-lg:flex-col max-xl:px-10 xl:gap-20
      justify-center lg:justify-start items-center"
    >
      {/* <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className=" object-cover w-fit max-md:max-h-[150px]  max-h-[200px] rounded-full "
      /> */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-fit max-lg:justify-center text-start max-lg:text-center"
      >
        <h2 className="text-[3.3rem] md:text-[5rem] leading-normal font-bold w-fit mx-auto max-lg:justify-center">
          <div className="flex w-fit max-lg:mx-auto">
            <p className="">Olá!</p>
            <span className="animate-bounce">👋</span>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p
          className="text-[1.5rem] xl:text-[1.8rem]  text-gray-300 font-semibold 
          max-w-sm lg:max-w-2xl w-fit max-lg:text-center pb-4"
        >
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>
      </motion.div>
    </motion.div>
  );
}
