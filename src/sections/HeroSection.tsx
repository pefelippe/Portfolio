import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <motion.div
      className="flex flex-col items-center justify-start w-full mx-auto pb-5 gap-5  text-start"
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
        Brazilian companies and U.S. tech startups.{" "}
      </motion.p>
    </motion.div>
  );
}

export default HeroSection;
