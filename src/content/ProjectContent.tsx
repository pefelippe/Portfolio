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
      className=" flex flex-col w-full items-center text-center  justify-center gap-4  mx-auto  max-w-7xl"
    >
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter ">
        Selected works
      </h1>
      <h3 className=" text-xl font-normal flex flex-col max-w-xl">
        Here you will find some of the personal projects that I created with
        each project containing its own case study
      </h3>

      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-16 lg:gap-32 py-5 lg:py-16
        justify-center w-full items-center min-h-fit"
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
