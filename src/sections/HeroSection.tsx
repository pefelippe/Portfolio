/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full gap-12 px-6 mx-auto max-w-7xl xl:gap-16 max-xl:flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        className="object-cover w-32 h-32 max-w-xs rounded-full shadow xl:h-full xl:w-full "
      /> */}

      <motion.div
        className="flex flex-col items-start justify-center w-full h-full gap-10 mx-auto max-xl:max-w-3xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {/* <motion.span className="text-center xl:text-left text-xl xl:text-3xl font-normal leading-[1.1] max-xl:mx-auto max-xl:max-w-xl">
          Hey! I am Pedro Felippe. A Full Stack Developer from Brazil.
        </motion.span> */}
        <motion.span className="text-5xl md:text-6xl font-semibold text-center xl:text-[80px] xl:leading-[1.1]">
          Building and scaling software for some{" "}
          <span className="text-indigo-500">pretty cool</span> companies
          <span className="text-indigo-500">.</span>
        </motion.span>

        {/* <motion.div className="flex items-center w-full gap-3 mx-auto text-xl font-semibold max-xl:items-center max-xl:max-w-xl">
          <motion.button
            className="flex items-center justify-center gap-2 py-4 text-center text-white transition-all bg-[#1e3c28] rounded-full max-xl:w-full px-9 hover:bg-[#1e3c28]/90 "
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Discover my work
          </motion.button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
