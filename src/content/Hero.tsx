import { motion } from "framer-motion";
import React from "react";

import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <motion.div
      initial={{ x: -250 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      className="flex max-md:flex-col h-fit w-full justify-center items-center gap-20 "
    >
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-contain max-h-[250px] rounded-xl max-w-md max-md:hidden"
      />
      <div className="flex flex-col max-w-xl gap-6 leading-tight">
        <h2 className="flex flex-col text-[4rem] font-bold  justify-start text-start  items-start ">
          <span className="">Web Developer </span>
        </h2>

        <p className="text-[1.5rem] text-gray-500">
          Olá. Eu sou Pedro Felippe. Sou um Web Developer, amante de filmes e
          fascinado por tecnologia.
        </p>

        <SocialLinks />
      </div>
    </motion.div>
  );
}
