import React from "react";
import Skill from "../atoms/Skill";
import { motion } from "framer-motion";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="component-base">
      <h1 className="absolute top-28 font-semibold text-5xl mb-28">Skills</h1>

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
          <div className="grid grid-cols-4 xl:grid-cols-6 gap-5 overflow-auto">
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
