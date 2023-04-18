import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type Props = {};

function QuickAbout({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-fit h-screen  max-w-7xl flex max-lg:flex-col justify-center 
       items-center w-full mx-auto max-xl:px-10 gap-6 lg:gap-20 "
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover max-md:hidden w-full max-md:max-h-[250px] md:h-[350px] lg:h-[400px] rounded-xl max-w-md"
      />
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 2 }}
        className="flex flex-col text-start gap-6 mx-auto "
      >
        <p className="text-[1.7rem] font-bold text-blue">Sobre</p>

        <h2 className="text-[2.5rem] lg:text-[4rem] leading-tight font-semibold">
          Trabalho há 3 anos com desenvolvimento Web.
        </h2>

        <p className=" text-[1.8rem] font-medium text-gray-300  ">
          Conheça detalhes sobre minha trajetória.
        </p>

        <Link
          href="/about"
          className="rounded-md  font-semibold w-fit  text-white hover:underline 
          text-[1.8rem] transition-all flex items-center gap-3 bg-[#414fe9] py-3 px-6"
        >
          <p>Conheça mais </p> <FaArrowRight className="" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default QuickAbout;
