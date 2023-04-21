import { motion } from "framer-motion";
import React from "react";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="work"
      className="h-fit min-h-screen max-w-4xl mx-auto text-[#000] w-full text-xl max-lg:px-8 
      flex flex-col justify-start gap-6 lg:gap-20 items-center text-center mt-[15vh]"
    >
      <motion.h2
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-[2.5rem] md:text-[3rem] leading-tight font-semibold dark:text-white
        text-center underline decoration-blue max-w-md md:max-w-xl mx-auto"
      >
        Meus projetos
      </motion.h2>

      <div className=" w-full grid gap-10  grid-cols-2 ">
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
