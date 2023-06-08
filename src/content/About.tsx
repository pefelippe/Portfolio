import { motion } from "framer-motion";
import Image from "next/image";

import React from "react";
import Skills from "./Skills";

export default function About() {
  return (
    <motion.div
      className="flex flex-col  text-center justify-center w-full justify-left mx-auto
     gap-10 max-w-5xl  p-8 rounded-3xl"
    >
      <div className=" flex">
        <Image
          src="/assets/avatar-pdr.png"
          width={350}
          height={250}
          className="rounded-xl mx-auto"
          alt="avatar-r"
        />
        <p className="text-[1.5rem] flex justify-left items-left max-w-2xl">
          Meu objetivo é continuar a contribuir ativamente para o sucesso de
          projetos e aprimorando, consequentemente, minha expertise.
        </p>
      </div>
      <Skills />
    </motion.div>
  );
}
