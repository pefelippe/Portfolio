import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

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

function RecentProjects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="work"
      className="h-full relative  text-white flex flex-col mx-auto  rounded-md
       text-black gap-10 md:gap-20  max-w-5xl"
    >
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-[2.5rem] md:text-[3rem] leading-tight font-semibold dark:text-white
        text-center underline decoration-blue max-w-md md:max-w-xl mx-auto z-40"
      >
        Projetos mais recentes
      </motion.h2>

      <div className="mx-auto w-full grid gap-20 md:gap-32 grid-cols-1 ">
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

export default RecentProjects;
