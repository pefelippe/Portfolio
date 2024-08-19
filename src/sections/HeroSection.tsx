/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex items-start justify-center w-full  mx-auto "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-start justify-center w-full h-full gap-8 mx-auto "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <motion.span className="text-4xl lg:text-6xl font-semibold lg:leading-[1.1] ">
          Web Developer from Brazil building{" "}
          <span className="text-indigo-500">pretty cool</span> web applications
          <span className="text-indigo-500">.</span>
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-medium mb-0 text-[#888]  "
        >
          Check more about me below, and get in touch if you'd like to work
          together. 👇
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
