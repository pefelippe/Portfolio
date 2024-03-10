import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.25 }}
      id="projects-container"
      className="content-intern items-start justify-center w-full min-h-fit flex gap-10 "
    >
      {/* <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold underline decoration-indigo-500">
        Projects
      </h1> */}

      <div className="flex flex-col  gap-8  w-full items-start  mx-auto ">
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
