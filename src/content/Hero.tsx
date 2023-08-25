/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

import Socials from "../components/Socials";

export default function Hero() {
  return (
    <motion.div
      className="h-[70vh] flex-col  gap-12 font-bold text-[3rem] 
    md:text-[3.5rem] xl:text-[4.5rem] leading-[1.2] flex justify-center items-start"
    >
      <h1 className="max-w-6xl ">
        web developer, dev ops enthusiast & coffee lover.
      </h1>

      <Socials />
    </motion.div>
  );
}
