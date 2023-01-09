import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-max flex relative flex-col pb-10 md:text-left items-center overflow-hidden max-w-full mx-auto rounded-lg">
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.25,
        }}
        className="overflow-hidden text-[#FFFFFFDE] p-5 rounded-xl   "
      >
        <div className="grid grid-cols-2 sm:grid-cols-10 gap-10 ">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
