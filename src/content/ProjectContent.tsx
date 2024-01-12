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
      className=" flex flex-col w-full items-start text-start  justify-center gap-4  max-w-7xl mx-auto"
    >
      <h1 className="text-4xl lg:text-5xl font-semibold tracking-tighter underline underline-offset-4 decoration-blue ">
        Works
      </h1>

      <div
        className="grid grid-cols-1  gap-24 py-6
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
