/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="min-h-fit max-md:px-8 font-light flex w-full mx-auto text-center
     max-w-2xl flex-col items-center h-screen  justify-center gap-4"
    >
      {/* <motion.img
        alt="project-img "
        className="rounded-full w-28 h-28 md:w-40 md:h-40 "
        src="assets/avatar-pdr.png"
      /> */}

      <h1 className="text-[1.8rem] md:text-[3.2rem] leading-normal w-full">
        A <b>full-stack developer</b> with experience in developing sites & apps
        with React.
      </h1>

      {/* <AnimatedBtn
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        className="flex pt-2 items-center  mx-auto  px-12 border rounded-full font-semibold transition-all hover:text-blue
        text-xl hover:underline p-4"
      >
        <p>Resume</p>
      </AnimatedBtn> */}
    </motion.div>
  );
}
