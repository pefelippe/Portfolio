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
        <h1 className="text-[36px] md:text-7xl lg:text-8xl  font-extrabold mb-4 text-blue flex-wrap">
          Crafting Innovative Solutions from Brazil.
        </h1>

        <motion.p
          className="text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Brazil-based software developer with a proven track record of helping
          Brazilian companies and U.S. tech startups thrive
        </motion.p>
      </div>
    </motion.div>
  );
}

export default HeroSection;
