/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

import Socials from "../components/Socials";

export default function About() {
  return (
    <motion.div className=" flex w-full mx-auto max-w-7xl  items-center h-screen gap-20">
      <div className=" flex flex-col  justify-start items-start gap-5">
        <h1 className="font-bold text-[2.5rem] xl:text-[4.5rem] text-black  uppercase  leading-tight w-full">
          <Typewriter
            words={["Web Developer, Dev-Ops enthusiast & Coffee lover"]}
            cursor
            cursorStyle="_"
            typeSpeed={50}
          />
        </h1>

        <p className="text-[1.2rem] xl:text-[1.4rem] leading-tight max-w-4xl text-gray-100">
          I'm a software engineer with skills and expertise to take on from
          building scalable and reliable software systems to crafting beautiful
          and intuitive user experiences.
        </p>

        <Socials />
      </div>
    </motion.div>
  );
}
