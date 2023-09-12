/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";
import Links from "../components/Links";

export default function About() {
  return (
    <motion.div className="relative flex flex-col gap-4   items-center text-center leading-none  justify-center ">
      <p className="text-[3rem] min-[450px]:text-[4rem] sm:text-[6rem]  md:text-[7rem] xl:text-[13rem] uppercase font-bold text-[#FFC857]">
        FULL-STACK DEVELOPER
      </p>
      <p className="text-2xl font-thin xs:text-4xl  leading-tight text-gray-100 ">
        Based in Brasil.
      </p>
    </motion.div>
  );
}
