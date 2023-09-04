/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import Skills from "./Skills";

export default function About() {
  return (
    <motion.div
      className=" font-light flex w-full  text-center mx-auto max-w-xl 
      flex-col items-start  justify-center leading-[1.3] gap-3"
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
        <h1 className="font-thin text-base sm:text-xl  leading-tight text-gray-500 ">
          I'm a passionate software engineer - Front End Specialist and
          Architect, Development Generalist and Open sourcerer.
        </h1>
      </div>

     

      <div className="ml-6 w-full flex gap-4 items-center justify-center text-lg  font-medium max-w-xl ">
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
      </div>
    </motion.div>
  );
}
