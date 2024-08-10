/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full  mx-auto lg:max-w-4xl "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex flex-col items-center justify-center w-full h-full gap-5 mx-auto "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <motion.span className="text-4xl md:text-7xl  font-semibold lg:text-center  lg:leading-[1.1]">
          Web Developer from Brazil building{" "}
          <span className="text-indigo-500">pretty cool</span> web applications
          <span className="text-indigo-500">.</span>
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl font-medium mb-0 text-[#8c929a] lg:max-w-lg lg:text-center"
        >
          Check out my personal work below, and get in touch if you'd like to
          work together. 👇
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
