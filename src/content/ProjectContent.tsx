import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      id="projects-container"
      className=" flex flex-col w-full items-start text-start  justify-center gap-4  max-w-5xl mx-auto"
    >
      <h1 className="text-lg lg:text-2xl font-extrabold  text-blue uppercase tracking-wider ">
        Works
      </h1>

      <div
        className="grid grid-cols-1  gap-12 pt-12  rounded-md
        justify-start w-full items-start min-h-fit"
      >
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
