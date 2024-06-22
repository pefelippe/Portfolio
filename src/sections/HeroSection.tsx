/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center w-full h-full min-h-screen gap-4 px-6 py-24 text-center text-white lg:gap-10 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="font-black text-yellow-200 pointer-events-auto text-7xl lg:text-9xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Pedro Felippe
      </motion.h1>

      <motion.span
        className="max-w-lg text-lg leading-relaxed pointer-events-auto md:leading-relaxed text-zinc-300 md:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I've spent the last 4 years building and scaling software for some
        pretty cool companies.
      </motion.span>
    </motion.div>
  );
}

export default HeroSection;
