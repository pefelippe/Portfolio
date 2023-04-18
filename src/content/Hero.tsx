import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative w-full min-h-fit h-[85vh] mx-auto flex flex-col max-xl:px-10 justify-center items-center  "
    >
      {/* <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className=" object-cover max-h-[150px] max-w-xl  rounded-full "
      /> */}
      <div className="absolute bottom-5 border p-2 rounded-full animate-bounce text-blue">
        <FaArrowDown className="h-6 w-6 " />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="flex flex-col w-fit justify-center text-center max-w-3xl leading-normal"
      >
        <h2 className="text-[3.3rem] md:text-[4.5rem] font-bold w-fit mx-auto justify-center ">
          <div className="flex w-full justify-center">
            <p>Olá!</p>
            <p className="">👋</p>
          </div>
          Eu sou <span className="text-blue ">Pedro Felippe</span>
        </h2>

        <p
          className="text-[1.6rem] xl:text-[2rem]  text-gray-500 justify-center
          max-w-3xl w-fit text-center "
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
