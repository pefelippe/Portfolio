import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
      className="h-fit min-h-[70vh] max-w-7xl mx-auto  text-xl max-xl:px-8 rounded-md 
      flex max-lg:flex-col justify-between items-center text-center gap-10"
    >
      <div className="flex flex-col gap-2 text-start max-w-xl">
        <p className="text-[1.4rem] font-bold text-blue">Projetos</p>
        <p className="text-[2.5rem] lg:text-[3.3rem] leading-tight font-semibold">
          Confira meus projetos
        </p>
        <p className="text-[1.5rem] font-medium text-gray-300 ">
          Confira uma seleção dos meus projetos mais recentes
        </p>

        <Link
          href="/projects"
          className="font-semibold max-lg:text-md text-[1.8rem]
            transition-all flex items-center gap-3 underline hover:text-gray-300 py-4"
        >
          <p>Veja demais projetos </p> <FaArrowRight className="" />
        </Link>
      </div>
      <div className=" w-fit grid grid-cols-1 ">
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
