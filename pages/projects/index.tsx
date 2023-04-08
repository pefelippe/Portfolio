import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="work"
      className="min-h-fit h-[80vh] max-w-5xl mx-auto text-white w-full text-xl max-lg:px-8 
      flex max-lg:flex-col justify-between gap-6 lg:gap-20 items-center text-center"
    >
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-[2.5rem] md:text-[3rem] leading-tight font-semibold dark:text-white
        text-center underline decoration-blue max-w-md md:max-w-xl mx-auto"
      >
        Meus projetos
      </motion.h2>
    </motion.div>
  );
}

export default Projects;
