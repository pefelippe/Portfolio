import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import SocialLinks from "../components/SocialLinks";

export default function About() {
  return (
    <motion.div
      initial={{ x: -250 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      className="flex max-md:flex-col h-fit w-full justify-center items-center gap-16 "
    >
      <motion.img
        alt="avatar-pefelippe"
        src="assets/avatar-pdr.png"
        className="relative object-contain max-h-[250px] rounded-xl max-w-md max-md:hidden"
      />
      <div className="flex flex-col max-w-xl  leading-tight">
        <h2 className="flex flex-col text-[4rem] font-bold  justify-start text-start  items-start ">
          <Typewriter
            words={["Pedro Felippe", "Web Developer", "Amante de café.tsx"]}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={50}
            loop
          />
        </h2>

        <p className="flex text-[1.5rem] text-gray-500 max-w-lg">
          Sou um desenvolvedor, amante de filmes e fascinado por tecnologia.
        </p>

        {/* <SocialLinks /> */}
      </div>
    </motion.div>
  );
}
