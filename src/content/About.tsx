/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div className=" flex w-full mx-auto max-w-7xl pb-[66px]">
      <div className=" flex flex-col  justify-start items-start ">
        <h1 className="font-bold text-[2.5rem] xl:text-[4rem] text-black max-w-5xl  pb-4 leading-tight w-full">
          I'm a web developer, dev ops enthusiast & coffee lover.
        </h1>

        <div className=" w-full mx-auto flex gap-12 ">
          <div className="flex flex-col justify-center gap-5 max-w-4xl">
            <p className="text-md xl:text-xl leading-relaxed">
              I'm a multi-talented software engineer, designer, and creator with
              a passion for using technology to solve real-world problems. I
              have the skills and expertise to take on a wide range of projects,
              from building scalable and reliable software systems to crafting
              beautiful and intuitive user experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
