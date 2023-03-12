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
      className="relative w-full mx-auto max-w-7xl flex flex-col gap-4 text-white"
    >
      <ContentTitle title="Projetos" />
      <p className="text-lg text-gray-300">
        Conheça meus projetos mais recentes.
      </p>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
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
      {/* <AnimatedBtn
        href="https://github.com/pefelippe?tab=repositories"
        target="_blank"
        className="text-white  flex w-fit hover:underline mx-auto gap-2 items-center text-xl font-semibold
         text-center rounded-full bg-[#5865f2] hover:text-[#fff] transition-all "
      >
        <motion.span className="flex gap-2 items-center justify-center px-6 rounded-md py-4">
          <p>Ver mais projetos</p>
        </motion.span>
      </AnimatedBtn> */}
    </motion.div>
  );
}

export default Projects;
