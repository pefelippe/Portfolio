import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-fit max-w-7xl flex max-lg:flex-col justify-start mx-auto items-center lg:gap-24 gap-8"
    >
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover rounded-2xl 
        max-lg:w-full max-lg:h-[250px]  h-[550px] w-[450px] max-w-xl shadow-2xl"
      />

      <motion.div
        className=" text-white h-fit
        flex flex-col text-3xl justify-start text-center lg:text-start 
        gap-4 lg:gap-12  w-full "
      >
        <h2 className="text-[3.5rem] leading-tight font-semibold dark:text-white ">
          <Typewriter
            words={["Prazer, eu sou Pedro Felippe"]}
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

        <button
          className="text-md text-primary inline-flex  p-4 px-8 w-fit rounded-full max-lg:mt-6
        font-medium focus:outline-none cursor-pointer transition max-lg:mx-auto bg-blue hover:bg-blue/80 hover:underline"
        >
          Conheça mais sobre mim
        </button>
      </motion.div>
    </motion.div>
  );
}
