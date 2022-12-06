import React from "react";
import Skill from "../atoms/Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="component-base">
      <h1 className="absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h1>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
        className="flex items-center justify-center gap-12 max-xl:flex-col m-20 h-max"
      >
        <div className="overflow-auto">
          <div className="grid grid-cols-2 gap-5 overflow-auto">
            <h3>Front-End</h3>
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
    </div>
  );
}

export default Skills;
