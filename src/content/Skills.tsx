import { motion } from "framer-motion";
import React from "react";

import Skill from "../components/Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <div className="h-max flex relative flex-col md:text-left max-w-7xl  mx-auto rounded-lg">
      <motion.div className="flex flex-col  items-center  overflow-hidden  space-y-8  w-full">
        <h4 className="mt-2 w-full text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl ">
          <span className=" ">Minhas Skills</span>
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
