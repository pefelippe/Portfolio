/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import Skills from "./Skills";

export default function About() {
  return (
    <motion.div
      className=" font-light flex w-full  text-center mx-auto max-w-xl 
      flex-col items-center  justify-center leading-[1.3] gap-4"
    >
      <motion.img
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        alt="project-img "
        className="rounded-full w-24 h-24 md:w-28 md:h-28"
        src="assets/avatar-pdr.png"
      />
      <div className="flex flex-col items-center gap-2">
        <p className="text-4xl sm:text-5xl  font-bold uppercase ">
          Pedro Felippe
        </p>
        <h1 className="font-thin text-base sm:text-2xl max-w-xl leading-tight text-gray-500 ">
          I'm a passionate software engineer - Front End Specialist and
          Architect and Development Generalist.
        </h1>
      </div>

      <div className=" flex gap-8 mx-auto justify-center">
        <AnimatedBtn
          className="hover:text-blue"
          target="_blank"
          href="github.com/pefelippe"
        >
          <FaGithub className="h-10 w-10 hover:text-blue" />
        </AnimatedBtn>
        <AnimatedBtn
          className="hover:text-blue"
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedin className="h-10 w-10 hover:text-blue" />
        </AnimatedBtn>
        <AnimatedBtn
          className="hover:text-blue"
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          <FaFilePdf className="h-10 w-10 hover:text-blue" />
        </AnimatedBtn>
      </div>
      {/* <div className="ml-6 w-full flex gap-6 items-center justify-center text-lg  font-medium max-w-xl ">
        <Link className="hover:underline" href="/projects">
          <motion.p
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Projects
          </motion.p>
        </Link>
        <Link
          className="bg-gray-850 hover:bg-gray-850/80 text-white flex gap-2 h-12 items-center 
          transition-all  rounded-full  py-2 px-8 hover:underline"
          href="/contact"
        >
          <motion.p
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Contact me
          </motion.p>
        </Link>
      </div> */}
    </motion.div>
  );
}
