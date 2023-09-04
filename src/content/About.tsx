/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div
      className=" font-light flex w-full  text-center mx-auto
      flex-col items-center  justify-center leading-[1.3] gap-4"
    >
      <div className="flex flex-col gap-3 items-center">
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          alt="project-img "
          className="rounded-full w-24 h-24"
          src="assets/avatar-pdr.png"
        />
        <p className="text-4xl sm:text-5xl  font-bold uppercase  ">
          Pedro Felippe
        </p>
        <h1 className="font-thin text-md sm:text-xl  leading-tight text-gray-500">
          I'm a passionate software engineer - Front End Specialist and
          Architect, Development Generalist and Open sourcerer.
        </h1>
      </div>
    </motion.div>
  );
}
