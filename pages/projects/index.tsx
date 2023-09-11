import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" mx-auto gap-10 flex flex-col text-start w-full h-1/2  min-h-fit pb-10 max-w-7xl "
    >
      <div className=" max-w-4xl  leading-1 gap-2 flex flex-col justify-start items-start">
        <h1 className="text-[1.8rem] text-[#f5f5f5] font-[500] bg-blue w-fit px-2">
          Selected work
        </h1>
        <h3 className="text-[1.6rem] max-w-2xl text-[#BABABA] leading-tight">
          Explore the following projects to get a glimpse of my projects
        </h3>
      </div>
      <div className="grid h-full md:grid-cols-2 gap-10 xl:gap-14 justify-center ">
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
