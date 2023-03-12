import { motion } from "framer-motion";
import React from "react";
import { SiAmazonaws, SiDocker, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

import About from "../src/content/About";
import Experience from "../src/content/Experience";

type Props = {};

function AboutPage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col py-20 space-y-20  max-md:px-10 h-fit  
      mx-auto max-w-7xl text-xl text-[#fff] w-full"
    >
      <About />
      <Experience />
    </motion.div>
  );
}

export default AboutPage;
