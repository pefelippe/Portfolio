/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";


export default function About() {
  return (
    <motion.div className=" flex w-full mx-auto max-w-7xl h-[50vh] items-center pb-[66px] gap-20">
      <div className=" flex flex-col  justify-start items-start gap-5">

        <h1 className="font-bold text-[2.5rem] xl:text-[4.5rem] text-black max-w-5xl   leading-tight w-full">
          <Typewriter
            words={["Im a web developer, dev ops enthusiast & coffee lover"]}
            cursor
            cursorStyle="_"
            typeSpeed={50}
          />
        </h1>

        <p className="text-base xl:text-xl leading-relaxed max-w-3xl">
              I'm a software engineer with skills and expertise to take on from
              building scalable and reliable software systems to crafting
              beautiful and intuitive user experiences.
        </p>


      </div>
    </motion.div>
  );
}
