/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import React from "react";
import Skills from "./Skills";
import Socials from "../components/Socials";

export default function About() {
  return (
    <motion.div className=" flex flex-col h-fit w-full gap-10 ">
      <motion.h1 className="font-bold text-[3.5rem] lg:text-[5.5rem]  w-full ">
        I'm <span className="text-blue">Pedro Felippe</span> — web developer,
        dev ops enthusiast & coffee lover.
      </motion.h1>

      <Skills />

    </motion.div>
  );
}
