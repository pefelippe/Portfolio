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
        max-lg:h-[180px]  xl:h-[500px] xl:w-[450px] max-w-xl"
      />

      <motion.div
        className=" text-white h-max w-fit
        flex flex-col text-3xl justify-around text-center md:text-start max-w-lg"
      >
        <h2 className="text-[3rem] md:text-[4rem] leading-tight font-semibold dark:text-white py-2">
          Olá, me chamo <p className="text-blue">Pedro Felippe</p>
        </h2>

        <p className="text-xl font-normal md:text-3xl text-gray-300 dark:text-slate-500 max-w-sm md:max-w-md">
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
      </motion.div>
    </motion.div>
  );
}
