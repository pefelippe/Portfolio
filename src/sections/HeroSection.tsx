/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full  mx-auto  min-h-screen"
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
        <motion.span className="text-4xl lg:text-5xl font-semibold lg:leading-[1.1] max-w-4xl">
          Web Developer from Brazil building{" "}
          <span className="text-indigo-500">pretty cool</span> web applications
          <span className="text-indigo-500">.</span>
        </motion.span>

        {/* <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-medium mb-0 text-[#888]  "
        >
          Check more about me below, and get in touch if you'd like to work
          together. 👇
        </motion.span> */}

        <div className="flex gap-4 items-center dark:bg-[#121212] border border-gray-100/10 p-3 rounded-3xl">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="https://www.linkedin.com/in/pedro-felippe/"
              target="_blank"
              className="flex items-center text-gray-800 dark:text-gray-200"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              href="https://github.com/pefelippe"
              target="_blank"
              className="flex items-center transition-colors text-gray-800 dark:text-gray-200"
            >
              <FaGithub className="text-3xl" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
