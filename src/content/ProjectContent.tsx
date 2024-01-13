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
      className="content-intern"
    >
      <div className="w-full font-normal flex flex-col justify-start text-lg  h-fit text-start">
        {/* <h1 className="section-title">Works</h1> */}
        <h3 className="section-subtitle  max-w-6xl">
          Always working in something.
        </h3>
      </div>
      <div
        className="grid grid-cols-1  rounded-md gap-16 py-8
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
