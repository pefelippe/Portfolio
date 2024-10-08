import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-start justify-start w-full mx-auto pb-5 gap-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.p
        className="text-xl lg:text-3xl mx-auto text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Brazil-based software developer with a proven track record of helping
        Brazilian companies and U.S. tech startups thrive.{" "}
        {/* <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <Link
            href="/about"
            className="text-indigo-600 hover:text-indigo-800 underline rounded-full text-xl lg:text-3xl pt-4"
          >
            More about me
          </Link>
        </motion.span> */}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center space-x-6"
      >
        <motion.a
          href="https://github.com/pefelippe"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500 "
        >
          <FaGithub className="w-9 h-9" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pedro-felippe/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-600 hover:text-indigo-500  "
        >
          <FaLinkedin className="w-9 h-9" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default HeroSection;
