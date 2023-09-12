/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div className="relative flex flex-col gap-4   items-center text-center leading-none  justify-center ">
      <p className="text-[3rem] md:text-[7rem] xl:text-[13rem] uppercase font-bold text-[#FFC857]">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-2xl xl:text-3xl font-extralight text-gray-100 leading-[1.2]">
        📍 Based in Brasil
      </p>
    </motion.div>
  );
}
