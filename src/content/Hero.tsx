import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialLinks from "../components/SocialLinks";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-[80vh] px-8 h-fit max-w-7xl flex max-lg:flex-col 
      justify-center lg:justify-start mx-auto items-center lg:gap-20"
    >
      {/* <div className="absolute left-0 p-2 bg-white  rounded-sm border-2 border-[#202020]">
        <div className="flex relative p-2 z-40">
         
        </div>
      </div> */}

      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover rounded-full lg:rounded-2xl
        max-sm:h-[200px] max-lg:h-[250px]  lg:h-[500px] lg:w-[450px] max-w-xl"
      />

      <motion.div
        className=" text-white h-fit
        flex flex-col text-3xl justify-start text-center lg:text-start 
        gap-4 lg:gap-12  w-full max-w-xl"
      >
        <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-tight font-semibold dark:text-white ">
          <Typewriter
            words={["Olá, eu sou Pedro Felippe"]}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={75}
            delaySpeed={2000}
          />
        </h2>

        <p className="text-xl font-normal lg:text-3xl text-gray-300 dark:text-slate-500">
          Sou um desenvolvedor Javascript, amante de filmes e fascinado por
          tecnologia.
        </p>
        <SocialLinks />

        {/* <button
          className="text-md text-primary inline-flex  p-4 px-8 w-fit rounded-full max-lg:mt-6
        font-medium focus:outline-none cursor-pointer transition max-lg:mx-auto bg-blue hover:bg-blue/80 hover:underline"
        >
          Conheça mais
        </button> */}
      </motion.div>
    </motion.div>
  );
}
