import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

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
  title: string;
};

function Projects({ projects, title }: ProjectsType) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.5, delay: 2 }}
      className=" flex  w-screen flex-col justify-center items-center  mx-auto  gap-12 "
      id="projetos"
    >
      <ContentTitle title={title} />

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
      <p className="italic">
        Visite meu{" "}
        <a
          href="https://github.com/pefelippe"
          target="_blank"
          className="font-semibold underline"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        para mais projetos.
      </p>
    </motion.div>
  );
}

export default Projects;
