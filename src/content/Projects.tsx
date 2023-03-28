import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

interface ProjectCard {
  id: number;
  description: string;
  imgUrl: string;
  link: string;
  title: string;
  repo: string;
}

type ProjectsType = {
  projects?: ProjectCard[];
};

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2 }}
      id="work"
      className="h-fit  relative  text-white flex flex-col  rounded-md text-black gap-10 "
    >
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="text-[2.5rem] leading-tight font-semibold dark:text-white text-center underline decoration-blue"
      >
        Conheça meus projetos mais recentes
      </motion.h2>

      <div className="mx-auto w-full grid gap-20 md:gap-32 grid-cols-1 py-20">
        {projects?.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              id={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
              title={proj.title}
              repo={proj.repo}
              stack={proj.stack}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
