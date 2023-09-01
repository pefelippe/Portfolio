/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="min-h-fit px-8 font-light flex w-full  text-left max-w-2xl mx-auto
      flex-col items-start h-screen  justify-center gap-6 leading-normal"
    >
      <div className=" flex flex-col gap-6 ">
        <motion.img
          alt="project-img "
          className="rounded-full w-20 h-20 "
          src="assets/avatar-pdr.png"
        />
        <p className=" text-7xl  font-bold uppercase ">Pedro Felippe</p>
        <h1 className="max-w-xl w-full text-2xl font-thin text-gray-100">
          A <b>full-stack developer</b> with experience in developing sites &
          apps with React.
        </h1>
      </div>

      <div className="w-full    flex text-xl gap-10 max-w-xl">
        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-2 items-center w-full transition-all hover:text-blue">
            Github
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
            Linkedin
          </div>
        </AnimatedBtn>
        <AnimatedBtn
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
          className=" flex gap-2 items-center 
          transition-all  hover:text-blue"
        >
          <p>Resume</p>
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}
