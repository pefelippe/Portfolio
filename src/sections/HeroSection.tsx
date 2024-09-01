import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center w-full mx-auto px-4 md:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* <motion.div
        className="mb-8 md:mb-0 md:mr-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/pedrof.jpg"
          alt="Your Name"
          width={300}
          height={300}
          className="rounded-3xl shadow-lg"
        />
      </motion.div> */}
      <div className="max-w-full md:max-w-2xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white mb-4 md:mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafting <span className="text-blue-600">Innovative Solutions</span>{" "}
          from Brazil
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Web & Mobile Developer transforming ideas into seamless digital
          experiences since 2020.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link href="/projects" passHref>
            <motion.button
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg 
               shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </Link>
          <Link href="/contact" passHref>
            <motion.button
              className="w-full sm:w-auto px-8 py-4 bg-gray-200 text-gray-800 rounded-lg font-semibold text-lg 
               shadow-lg hover:bg-gray-300 transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </motion.button>
          </Link>
          {/* 
          <Link href="https://github.com/pefelippe" passHref target="_blank">
            <motion.button
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6 text-gray-800" />
            </motion.button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pedro-felippe/"
            passHref
            target="_blank"
          >
            <motion.button
              className="w-12 h-12 bg-white text-blue rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6 text-blue-600" />
            </motion.button>
          </Link> */}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
