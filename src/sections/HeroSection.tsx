import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full mx-auto "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-start  gap-8 lg:gap-16 w-full">
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/assets/pedrof.jpg"
            alt="Pedro's profile picture"
            fill
            className="rounded-full z-10 shadow-2xl object-cover"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-start gap-4 lg:gap-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.p
            className="text-xl sm:text-xl font-normal text-gray-600 dark:text-[#a8a8a8] transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            👋 Hey, I'm Pedro Felippe.
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight lg:leading-[1.2] text-gray-800 dark:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Web Developer from Brazil building{" "}
            <span className="text-indigo-600 dark:text-indigo-600 transition-colors duration-300">
              pretty cool
            </span>{" "}
            web applications
            <span className="text-indigo-600 dark:text-indigo-600 transition-colors duration-300">
              .
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6 w-full"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link href="/about">
              <motion.button
                className="px-6 py-3 bg-indigo-600 font-semibold text-white rounded-3xl shadow-md hover:bg-indigo-700 transition-colors duration-300 w-full  px-9"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className=" py-3 font-semibold text-gray-800  rounded-3xl dark:text-white shadow-md  transition-colors duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
