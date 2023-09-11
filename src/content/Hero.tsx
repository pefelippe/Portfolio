/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      className="relative items-center text-center leading-none  justify-center
    flex flex-col gap-2 md:gap-4  max-w-screen-2xl  mx-auto min-h-[90vh]"
    >
      <p className="text-[4rem] sm:text-[6rem] lg:text-[10rem] 2xl:text-[14rem]  uppercase font-bold text-yellow-500">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-[1.3rem] md:text-[2rem] max-md:max-w-sm font-extralight text-gray-100 leading-[1.2]">
        📍 Based in Brazil
      </p>
    </motion.div>
  );
}
