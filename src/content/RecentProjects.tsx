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
      className="w-full mx-auto  h-fit max-w-4xl min-h-[70vh] py-10 text-xl max-xl:px-10 rounded-xl flex max-lg:flex-col justify-center
      items-center text-center gap-10 "
    >
      <div className="flex flex-col gap-4 text-center">
        <p className="text-[3rem] lg:text-[4rem] leading-tight font-semibold">
          Confira meus <b className="bg-blue text-white px-2">projetos</b>
        </p>
        <p className="text-[1.8rem] font-medium text-gray-500 mx-auto max-w-xl text-center">
          Confira uma seleção dos meus projetos mais recentes
        </p>

        <div className=" w-full grid gap-10 lg:gap-20 lg:grid-cols-2 py-5 max-xl:px-10 ">
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

        {/* <Link
          href="/projects"
          className="font-semibold max-lg:text-md text-[1.8rem] mx-auto text-center
            transition-all flex items-center gap-3 underline hover:text-gray-300 "
        >
          <p>Projetos </p> <FaArrowRight className="" />
        </Link> */}
      </div>
    </motion.div>
  );
}

export default RecentProjects;
