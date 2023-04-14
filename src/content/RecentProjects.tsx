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
      className="min-h-fit h-[75vh]  w-full flex flex-col mx-auto rounded-md  gap-10 max-w-7xl "
    >
      <motion.h2
        className="text-[2.5rem] leading-tight font-semibold 
        max-w-md md:max-w-xl underline decoration-blue mx-auto"
      >
        Projetos mais recentes
      </motion.h2>

      <div className=" w-fit mx-auto grid gap-10  grid-cols-2 ">
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
