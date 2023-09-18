import { motion } from "framer-motion";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" mx-auto flex flex-col text-start
      w-full items-start  justify-start "
    >
      <div className="leading-1 gap-2 flex flex-col justify-between items-start  max-w-lg w-full text-[#090909] ">
        <h1 className="text-3xl font-medium mb-2">My works</h1>
        <h3 className="text-gray-500 mb-6">
          Explore the following projects to get a glimpse of my job experience.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10  justify-center ">
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
