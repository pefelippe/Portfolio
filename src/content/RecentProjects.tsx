import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
      className="h-fit max-w-7xl mx-auto min-h-screen
       text-xl max-xl:px-8 rounded-xl flex max-lg:flex-col 
        items-center text-center gap-10 "
    >
      <div className="flex flex-col gap-2 text-start max-w-xl">
        <p className="text-[1.7rem] font-bold text-blue">Projetos</p>
        <p className="text-[2.5rem] lg:text-[4rem] leading-tight font-semibold">
          Confira meus <b className="bg-blue text-white px-2">projetos</b>
        </p>
        <p className="text-[1.8rem] font-medium text-gray-300 ">
          Confira uma seleção dos meus projetos mais recentes
        </p>

        <Link
          href="/projects"
          className="font-semibold max-lg:text-md text-[1.8rem]
            transition-all flex items-center gap-3 underline hover:text-gray-300 py-4"
        >
          <p>Descubra meus projetos </p> <FaArrowRight className="" />
        </Link>
      </div>
      {/* <div className=" w-fit grid grid-cols-1 ">
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
      </div> */}
    </motion.div>
  );
}

export default RecentProjects;
