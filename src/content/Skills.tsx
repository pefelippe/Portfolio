import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-max flex relative flex-col md:text-left max-w-7xl  mx-auto rounded-lg pb-20 ">
      <motion.div className="flex flex-col  items-start  overflow-hidden  space-y-8  w-full">
        <h4 className="relative text-4xl font-semibold ">
          <span className=" text-[#000]">Minhas Skills</span>
        </h4>

        <div className="grid grid-cols-3 md:grid-cols-6  gap-6">
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

        <div></div>
      </motion.div>
    </div>
  );
}

export default Skills;
