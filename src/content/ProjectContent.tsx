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
      className="content-intern gap-16"
    >
      <h3 className="section-subtitle  max-w-6xl">
        Featured <span className="text-blue">Works</span>
      </h3>

      <div
        className="flex flex-col lg:grid  rounded-md gap-16
        lg:justify-start w-full items-start h-full"
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

      <div
        className="flex flex-col lg:grid grid-cols-2 rounded-md gap-8
        lg:justify-start w-full items-start min-h-fit"
      >
        {projects?.map((proj) => {
          if (proj.id > 2)
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
