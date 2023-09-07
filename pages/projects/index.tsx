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
      className="max-w-screen-xl  mx-auto"
    >
      <div className="w-full max-w-4xl text-4xl leading-1 gap-5 flex flex-col">
        <h1>Selected Work</h1>
        <h1 className="text-gray-100 text-4xl">Selected Work</h1>
      </div>
      <div className="grid h-full w-full md:grid-cols-2 gap-20 justify-center md:pt-10">
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
