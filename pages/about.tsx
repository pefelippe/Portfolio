import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import Details from "../src/content/Details";
import Experience from "../src/content/Experience";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col mx-auto justify-center 
      items-center align-center max-sm:space-y-10 space-y-20 py-20  min-w-[400px]"
    >
      <Details />
      <Experience />
    </motion.div>
  );
}

export default About;
