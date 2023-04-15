import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

function QuickAbout({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-fit max-w-7xl flex max-lg:flex-col justify-center  items-center w-full mx-auto max-xl:px-10 gap-6 lg:gap-24 "
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover w-full max-md:max-h-[250px] md:h-[350px] lg:h-[400px] rounded-xl max-w-xl"
      />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-start max-md:gap-4 gap-8 mx-auto max-w-xl"
      >
        <p className=" text-[1.4rem] font-bold text-blue">Sobre</p>
        <h2 className="leading-tight text-[1.6rem] xl:text-[2.5rem] text-black ">
          Me chamo Pedro Felippe. Trabalho há 3 anos com desenvolvimento Web.
        </h2>

        <p className="text-[1.6rem] xl:text-[1.8rem]  text-gray-300   ">
          Sou um Web Developer, amante de filmes e fascinado por tecnologia.
        </p>
        <Link
          href="/about"
          className="font-semibold  text-white  max-lg:mx-auto max-lg:text-md text-[1.8rem]
            transition-all flex items-center gap-3 underline hover:text-gray-300"
        >
          <p>Descubra mais </p> <FaArrowRight className="" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default QuickAbout;
