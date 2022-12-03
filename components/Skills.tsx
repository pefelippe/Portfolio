import React from "react";
import Skill from "../atoms/Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative 
    text-center max-w-7xl px-10 justify-evenly mx-auto 
    items-center space-y-5 max-md:justify-center"
    >
      <h4 className="text-3xl font-semibold">Minhas Skills</h4>

      <motion.div
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
        className="flex items-center justify-center gap-12 max-xl:flex-col m-20"
      >
        <div className="overflow-auto">
          <div className="grid grid-cols-6 gap-5 overflow-auto">
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
    </div>
  );
}

export default Skills;
