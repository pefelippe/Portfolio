import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-[70vh] flex max-lg:flex-col justify-center gap-8 lg:gap-20  items-center mx-auto  "
    >
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-cover rounded-md mx-auto
        max-lg:w-full max-lg:h-[300px]   h-[600px] w-[500px] max-w-xl"
      />

      <motion.div
        className="mx-auto  text-white h-fit
        flex flex-col text-3xl  justify-start  text-start 
        gap-6 md:gap-12 max-w-2xl"
      >
        <h2 className="text-[2.5rem] leading-tight  text-black dark:text-white">
          Me chamo Pedro Felippe. Eu construo software para Web.
        </h2>

        <p className="text-xl font-normal md:text-3xl text-gray-300 dark:text-slate-500">
          Sou um desenvolvedor Javascript, amante de filmes e fascinado por
          tecnologia.
        </p>

        <button
          className="text-md text-primary inline-flex
        font-medium focus:outline-none cursor-pointer transition underline"
        >
          Conheça mais sobre mim
        </button>
      </motion.div>
    </motion.div>
  );
}
