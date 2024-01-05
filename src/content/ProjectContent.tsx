import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="work"
      className=" flex flex-col w-full items-start  justify-start text-[#101010] gap-10 mx-auto "
    >
      <h1 className="text-4xl xl:text-6xl  font-bold leading-[1.2] max-w-4xl w-fit text-start">
        Meet some of my <span className="underline underline-offset-4 decoration-blue">projects</span>.
      </h1>

      <div className="grid md:grid-cols-1 gap-10 justify-center w-full items-center mx-auto">
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
