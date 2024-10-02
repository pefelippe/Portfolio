import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full mx-auto px gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-full md:max-w-6xl text-center ">
        <h1 className="text-[36px] md:text-7xl lg:text-8xl  font-extrabold leading-tight mb-4  text-blue flex-wrap">
          Crafting Innovative Solutions from Brazil.
        </h1>

        <motion.p
          className="text-xl lg:text-2xl mb-4 md:mb-6 max-w-5xl  text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          UI developer helping to transform ideas into digital solutions since
          2020.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=" border-gray-200 "
        >
          <div className="flex justify-center  space-x-6 ">
            <motion.a
              href="https://github.com/pefelippe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-600"
            >
              <FaGithub className="w-9 h-9" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pedro-felippe/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 hover:text-gray-800 dark:text-gray-600 "
            >
              <FaLinkedin className="w-9 h-9" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
