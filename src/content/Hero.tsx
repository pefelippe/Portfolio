/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div className="flex flex-col gap-4  relative items-center text-center leading-none min-h-screen justify-center ">
      <p className="text-7xl xl:text-[12rem] uppercase font-bold text-blue">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-2xl xl:text-3xl font-extralight text-gray-100 leading-[1.2]">
        📍 Based in Brasil
      </p>
    </motion.div>
  );
}
