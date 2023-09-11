/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div className="relative flex flex-col gap-4   items-center text-center leading-none  justify-center  h-[90vh]">
      <p className="text-6xl md:text-[8rem] xl:text-[14rem] uppercase font-bold text-blue">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-2xl xl:text-4xl font-extralight text-gray-100 leading-[1.2]">
        📍 Based in Brasil
      </p>
    </motion.div>
  );
}
