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
      className=" mx-auto gap-20 flex flex-col text-center w-full"
    >
      <div className=" max-w-4xl  leading-1  gap-2 flex flex-col justify-center mx-auto">
        <h1 className="text-4xl">Selected Work</h1>
        <h3 className="text-4xl max-w-xl text-gray-300">
          Explore the following projects to get a glimpse of my projects:{" "}
        </h3>
      </div>
      <div className="grid h-full w-full xl:grid-cols-2 gap-20 justify-center ">
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
