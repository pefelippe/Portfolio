/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

import AnimatedLink from "../components/animated/AnimatedLink";
import Link from "next/link";

export default function About() {
  return (
    <motion.div
      className="flex max-lg:flex-col max-lg:  mx-auto  items-center 
    justify-center lg:gap-20  w-full max-w-7xl rounded-[30px] "
    >
      <Link
        className="max-w-xl max-h-[40vh] object-fit items-center 
        flex-shrink-0 object-cover transition-all flex  w-full  rounded-[30px] hover:blur-sm"
        href="/about"
      >
        <motion.img
          src="/assets/avatar-pdr.png"
          alt="me"
          className="max-w-xl max-h-[40vh] object-fit items-center 
        flex-shrink-0 object-cover transition-all flex  w-full  rounded-[30px] hover:blur-sm"
        />
      </Link>
      <div className="leading-1 gap-3 flex flex-col justify-between items-start  max-w-lg w-full">
        <h1 className="text-7xl font-thin xs:text-4xl  leading-tight text-gray-100 tracking-[5px]">
          who am i
        </h1>

        <h3 className="text-[1.4rem] max-w-2xl text-[#BABABA] leading-tight">
          I'm Pedro Felippe - A Full-Stack developer. Based in Brazil.
        </h3>

        {/* <AnimatedLink
          href="/about"
          className="text-[1.4rem] max-w-2xl text-gray-500 leading-tight transition-all
            rounded-full underline hover:text-blue "
        >
          <div className="flex gap-2 items-center ">
            <p>Know more about me</p>
          </div>
        </AnimatedLink> */}
      </div>
    </motion.div>
  );
}
