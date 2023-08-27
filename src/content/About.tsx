/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="min-h-fit max-md:px-8 font-light flex w-full mx-auto
     max-w-3xl flex-col items-center h-screen  justify-center"
    >
      {/* <motion.img
        alt="project-img "
        className="rounded-full w-28 h-28 md:w-48 md:h-48 border-4 "
        src="assets/avatar-pdr.png"
      /> */}

      <h1 className="text-[1.8rem] md:text-[2.8rem] leading-normal w-full">
        I'm <b>Pedro Felippe</b>. A <b>full-stack developer</b> with experience
        in developing sites & apps with React.
      </h1>
    </motion.div>
  );
}
