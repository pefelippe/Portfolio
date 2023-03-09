import { motion } from "framer-motion";
import React from "react";

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
      className="relative mx-auto w-full  max-w-7xl h-fit  gap-10 flex flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="h-fit w-full flex flex-col justify-center items-center "
      >
        <ContentTitle title="Projetos" />
        <div
          className="w-full max-w-7xl justify-center items-center relative 
        grid grid-cols-1 gap-20 md:gap-32 mx-auto  "
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
        {/* <AnimatedBtn
          href="https://github.com/pefelippe?tab=repositories"
          target="_blank"
          className="text-white  mt-20 flex w-fit hover:underline mx-auto gap-2 items-center text-xl font-semibold text-center rounded-full  hover:text-[#5865f2] transition-all "
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-1 items-center justify-center"
          >
            <FaAngleRight className="h-8 w-8 " />
            <p>Ver mais projetos</p>
          </motion.span>
        </AnimatedBtn> */}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
