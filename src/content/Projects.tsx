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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="relative w-full mx-auto max-w-7xl flex flex-col gap-2 text-white"
    >
      <ContentTitle title="Projetos" />
      <p className="text-lg text-gray-300 max-md:mx-auto">
        Conheça meus projetos mais recentes.
      </p>
      <div className="w-full grid md:gap-20 md:grid-cols-2 grid-cols-1 gap-8 pt-2">
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
