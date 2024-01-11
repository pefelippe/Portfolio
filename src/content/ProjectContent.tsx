import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1.5 }}
      id="projects-container"
      className=" flex flex-col w-full items-start  justify-start gap-2  mx-auto   max-w-7xl"
    >
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter">
        Selected works
      </h1>

      <h3 className="w-fit text-[17px] font-thin">
        Always working in something. Hover the project to see details.
      </h3>

      <div className="grid grid-cols-1 gap-6 justify-center w-full items-center pt-3">
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
