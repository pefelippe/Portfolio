/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full h-full min-h-screen gap-4 px-6 py-24 text-center lg:gap-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="font-black pointer-events-auto text-8xl font-poppins"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Pedro Felippe
      </motion.h1>

      <motion.span
        className="max-w-2xl text-lg font-medium leading-relaxed pointer-events-auto md:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Full Stack Web Developer that spent the last 4 years building and
        scaling software for some pretty cool companies.
      </motion.span>

      <motion.span
        className="max-w-2xl font-semibold leading-relaxed pointer-events-autotext-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Under construction.
      </motion.span>
      
    </motion.div>
  );
}

export default HeroSection;
