import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full mx-auto px-4 md:px-0 gap-8 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="mb-6 md:mb-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/assets/pedrof.jpg"
          alt="Your Name"
          width={160}
          height={160}
          className="rounded-full shadow-lg border-4 border-yellow-300"
        />
      </motion.div>
      <div className="max-w-full md:max-w-3xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 md:mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Crafting <motion.span
            className="text-yellow-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >Innovative Solutions</motion.span>{" "}
          from Brazil.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8 md:mb-10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Web & Mobile Developer transforming ideas into seamless digital
          experiences since 2020.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {["Projects", "About", "Contact"].map((text, index) => (
            <Link key={text} href={`/${text.toLowerCase()}`} passHref>
              <motion.button
                className={`w-full sm:w-40 px-4 py-3 rounded-lg font-semibold text-lg 
                 shadow-lg transition duration-300 flex items-center justify-center
                 ${index === 0 ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" :
                   index === 1 ? "bg-indigo-800 text-white hover:bg-blue-400" :
                   "bg-pink-500 text-white hover:bg-pink-400"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.2 }}
              >
                {text}
                {index === 0 && (
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
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                )}
              </motion.button>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
