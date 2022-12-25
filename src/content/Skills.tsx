import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

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
      className="h-max flex relative flex-col text-center md:text-left xl:flex-row xl:px-10
     justify-around max-w-full xl:space-y-0 mx-auto items-center py-20 "
    >
      <h4 className="text-4xl font-semibold">Quais as minhas skills?</h4>
      <div className="overflow-auto">
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
      </div>
    </motion.div>
  );
}

export default Skills;
