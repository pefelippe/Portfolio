import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLongArrowAltRight } from "react-icons/fa";

import ContentTitle from "../atoms/ContentTitle";
import AnimatedBtn from "../components/motion/AnimatedBtn";
import ProjectCard from "../components/ProjectCard";

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

function Projects({ projects }: ProjectsType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 1 }}
      className="h-fit   flex  w-fit flex-col justify-center items-center  mx-auto  gap-12 px-8 "
      id="projetos"
    >
      <ContentTitle title="Projetos" />

      <div className="relative  grid xl:grid-cols-2 grid-cols-1 gap-8 mx-auto  ">
        {projects?.map((proj) => {
          return (
            <ProjectCard
              key={proj.id}
              description={proj.description}
              imgUrl={proj.imgUrl}
              link={proj.link}
              title={proj.title}
              repo={proj.repo}
            />
          );
        })}
      </div>
      {/* <a
        href="https://github.com/pefelippe"
        rel="noreferrer"
        target="_blank"
        className="flex gap-2 items-center text-md font-semibold text-center p-4 px-8 border-2 rounded-full  bg-[#5865f2] transition-all text-[#fff]"
      >
        Visite meu Github para mais projetos
      </a> */}
    </motion.div>
  );
}

export default Projects;
