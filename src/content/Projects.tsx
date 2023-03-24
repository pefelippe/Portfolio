import { motion } from "framer-motion";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import ContentTitle from "../components/ContentTitle";
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
      id="work"
      className="h-fit relative w-full  max-w-7xl flex flex-col  text-white gap-20"
    >
      <h2 className="text-[2.5rem] leading-tight font-semibold dark:text-white text-center underline decoration-blue">
        Conheça meus projetos mais recentes
      </h2>

      <div className="w-full grid gap-32 grid-cols-1 py-4">
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
