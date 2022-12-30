import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-max flex relative flex-col md:text-left py-10 items-center overflow-hidden">
      <h4 className="text-4xl font-semibold ">E quais as minhas Skills?</h4>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.25,
        }}
        className="overflow-hidden text-[#FFFFFFDE] p-5 rounded-xl   "
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 ">
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
      </motion.div>
    </div>
  );
}

export default Skills;
