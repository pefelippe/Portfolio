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
      initial={{ x: -250, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className=" w-full mx-auto h-fit text-xl 
      rounded-xl flex flex-col justify-between
      items-start "
    >
      <div className=" max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meus projetos
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Conheça meus projetos mais recentes.
        </p>
      </div>

      <div
        className="w-full grid border-t
       border-gray-200 mt-10 pt-10 lg:mx-0 gap-16"
      >
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
