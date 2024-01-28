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
      className="content-intern gap-8 items-center justify-center"
    >
      <div className="flex flex-col gap-4 text-center">
        <h3 className="section-subtitle max-w-6xl">
          Featured <span className="text-blue">Works</span>
        </h3>
        {/* <p className="text-xl">Check my works.</p> */}
      </div>

      <div
        className="grid md:grid-cols-2 rounded-md gap-8
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
    </motion.div>
  );
}

export default Projects;
