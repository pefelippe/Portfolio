import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex items-center justify-center w-full mx-auto  py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        <motion.div
          className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/assets/avatar-pdr.png"
              alt="Pedro's profile icon"
              width={110}
              height={110}
              className="rounded-full border-2 border-blue-500 shadow-md"
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Building <span className="text-blue-600">Cool Web Apps</span> from
            Brazil.
          </motion.h1>

          <motion.p
            className="text-lg  text-gray-600 dark:text-gray-400 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Web & Mobile Developer creating impactful solutions since 2020.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 mt-1 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Link href="/about" passHref className="w-full md:w-auto">
              <motion.button
                className="w-full md:w-auto bg-blue px-6 py-3 md:px-9 bg-blue-600
                 text-white rounded-full font-semibold text-lg 
                 shadow-lg hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.button>
            </Link>
            <Link href="/contact" passHref className="w-full md:w-auto">
              <motion.button
                className="w-full md:w-auto px-6 py-3 md:px-9  bg-gray-200 text-gray-800 
                rounded-full font-semibold text-lg shadow-lg hover:bg-gray-300 
                transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
