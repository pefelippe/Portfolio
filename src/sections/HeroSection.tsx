/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full h-full min-h-screen gap-12 px-6 mx-auto max-w-7xl lg:gap-16 max-lg:flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        className="object-cover w-32 h-32 max-w-xs rounded-full shadow lg:h-full lg:w-full "
      />

      <motion.div
        className="flex flex-col items-start justify-center w-full h-full gap-8 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <motion.span className="text-4xl font-semibold leading-snug text-center lg:leading-loose lg:text-left lg:text-6xl xl:text-7xl">
          Building and scaling software for some pretty cool companies.
        </motion.span>

        <motion.span className="text-center lg:text-left text-xl xl:text-2xl font-normal leading-[1.1] max-lg:mx-auto">
          Hey! I am Pedro Felippe. A Full Stack Developer from Brazil. 🇧🇷
        </motion.span>

        <motion.div className="flex items-center w-full gap-6 text-xl font-semibold max-lg:flex-col max-lg:items-start">
          <motion.button
            className="flex items-center justify-center gap-2 py-4 text-center text-white transition-all bg-indigo-600 rounded-full max-lg:w-full px-9 hover:bg-indigo-400 "
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Discover my work
          </motion.button>

          <motion.button
            className="flex items-center gap-2 py-4 transition-all  text-[#101010] lg:hover:text-[#101010]/70  justify-center  text-center  max-lg:w-full max-lg:bg-indigo-600 rounded-full max-lg:text-white"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
          >
            Blog Posts
          </motion.button>
          {/* <button className=" transition-all rounded-full text-[#101010] hover:text-[#101010]/70 hover:underline ">
            Check my Blog
          </button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
