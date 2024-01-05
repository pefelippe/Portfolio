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
      className=" flex flex-col w-full items-start  justify-center  text-center  text-[#101010] gap-10 mx-auto "
    >
      <h1 className="text-5xl xl:text-6xl text-center font-bold leading-[1.2]  mx-auto max-w-xl underline decoration-blue ">
        Meet some of my projects.
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 justify-between w-full">
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
