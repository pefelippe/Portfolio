import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import SocialLinks from "../components/SocialLinks";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-full min-h-fit h-[80vh] mx-auto max-w-7xl flex flex-col max-xl:px-10 justify-center items-center gap-4"
    >
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className=" object-cover max-h-[180px]  rounded-full max-md:hidden"
      />
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-fit justify-center text-center"
      >
        <h2 className="text-[3.3rem] md:text-[4.5rem] font-bold w-fit mx-auto justify-center ">
          <div className="flex w-full justify-center">
            <p>Olá!</p>
            <p className="animate-bounce">👋</p>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p
          className="text-[1.8rem] xl:text-[2rem]  text-gray-500 justify-center
          max-w-2xl w-fit text-center pb-4"
        >
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>

        {/* <Link
          href="/about"
          className="rounded-md  font-semibold w-fit max-lg:mx-auto  text-white hover:underline 
          text-[1.8rem] transition-all flex items-center gap-3 bg-[#414fe9] py-3 px-6"
        >
          <p>Conheça mais </p> <FaArrowRight className="" />
        </Link> */}
      </motion.div>
    </motion.div>
  );
}
