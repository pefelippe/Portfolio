/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="min-h-screen  font-light flex w-full  text-start max-w-2xl mx-auto
      flex-col items-center  justify-center leading-[1.3] gap-4"
    >
      <div className="flex flex-col gap-4 items-start">
        <motion.img
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          alt="project-img "
          className="rounded-full w-16 h-16"
          src="assets/avatar-pdr.png"
        />
        <p className=" text-6xl  font-bold uppercase  ">Pedro Felippe</p>
        <h1 className="font-thin text-2xl  leading-tight text-gray-100">
          I'm a passionate software engineer - Front End Specialist and
          Architect, Development Generalist and Open sourcerer.
        </h1>
      </div>

      <div className="w-full font-medium flex text-xl gap-10 max-w-xl pt-2 items-center ">
        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-2 items-center w-full transition-all hover:text-blue">
            <FaGithub /> Github
          </div>
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-2 items-center 
             transition-all  hover:text-blue"
          >
            <FaLinkedin /> Linkedin
          </div>
        </AnimatedBtn>
        <AnimatedBtn
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
          className=" flex gap-2 items-center 
          transition-all  hover:text-blue"
        >
          <>
            <FaFilePdf />
            <p>Resume</p>
          </>
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}
