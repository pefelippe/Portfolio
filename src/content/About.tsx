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
      className=" font-light flex w-full  text-center mx-auto
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

      <Skills />

      {/* <div className="w-full flex gap-6 items-center justify-center text-lg  font-medium max-w-xl ">
        <Link className="hover:underline" href="/contact">
          <motion.p
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Contact
          </motion.p>
        </Link>
        <AnimatedBtn
          className="bg-gray-850 hover:bg-gray-850/70 text-white flex gap-2 h-12 items-center 
          transition-all  rounded-full  py-2 px-12"
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          <>Resume</>
        </AnimatedBtn>
      </div> */}
    </motion.div>
  );
}
