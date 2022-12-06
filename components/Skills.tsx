import React from "react";
import Skill from "./atoms/Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1.25,
      }}
      className=" h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
      min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>
      <div className="overflow-auto">
        <div className="grid grid-cols-4 gap-5 overflow-auto">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
