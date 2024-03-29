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
      className=" items-start justify-center w-full min-h-fit  flex flex-col gap-8  py-10 md:py-32  md:gap-32 section "
    >
      <h1 className="firstTitle">Selected Works</h1>
      <div className="flex flex-col w-full items-start mx-auto gap-24 md:gap-40 ">
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
