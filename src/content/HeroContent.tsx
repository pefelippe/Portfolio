/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div
      className="relative flex flex-col gap-6  items-center mx-auto min-h-[70vh] 
    text-center leading-none  justify-center pt-[10vh] "
    >
      <p
        className="text-[6rem] 
       md:text-[7rem] xl:text-[10rem] uppercase font-bold text-blue"
      >
        Pedro Felippe
      </p>
      <p className="text-[1.2rem] md:text-[2rem]  uppercase text-gray-100 tracking-[10px] font-light">
        FULL-STACK DEVELOPER
      </p>
      {/* <Links /> */}
    </motion.div>
  );
}
