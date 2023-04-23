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
      transition={{ duration: 1.5, delay: 1.5 }}
      id="work"
      className=" w-fit mx-auto h-fit max-w-4xl text-xl  rounded-xl flex flex-col justify-center
      items-center text-center gap-4 "
    >
      <div className="flex flex-col gap-4  justify-center items-center w-full ">
        <b className="bg-blue text-white p-2 w-fit rounded-xl tracking-[5px] text-[2rem] px-10">
          projetos
        </b>

        <p className=" font-semibold text-[#000] text-[1.6rem]">
          Talk is cheap. Show me projetinhos.
        </p>
      </div>
      <div className="max-w-4xl w-full grid gap-10 lg:gap-20  ">
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
