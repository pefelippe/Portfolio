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
      className=" h-fit max-w-7xl flex max-lg:flex-col justify-center  mx-auto items-center lg:gap-20"
    >
      <motion.img
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover rounded-full lg:rounded-2xl
        max-sm:h-[180px] max-lg:h-[250px]  lg:h-[500px] lg:w-[450px] max-w-xl"
      />

      <motion.div
        className=" text-white h-max
        flex flex-col text-3xl justify-around text-center lg:text-start w-full max-w-lg"
      >
        <h2 className="text-[3.5rem] lg:text-[4.5rem] leading-tight font-semibold dark:text-white ">
          Olá, me chamo Pedro Felippe
        </h2>

        <p className="text-xl font-normal lg:text-3xl text-gray-300 dark:text-slate-500 py-5">
          <Typewriter
            words={[
              "Sou um desenvolvedor Javascript, amante de filmes e fascinado por tecnologia.",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={75}
            deleteSpeed={100}
            delaySpeed={2000}
          />
        </p>
        {/* <SocialLinks /> */}

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
