import { motion } from "framer-motion";

import ProjectCard from "../../src/components/ProjectCard";
import { projects } from "../../src/constants";

function Projects() {
  return (
    <motion.div
      id="work"
      className=" mx-auto flex flex-col w-full items-start  justify-center "
    >
      <div className="leading-1 gap-5 flex flex-col justify-between items-start   w-full text-white ">
        <h1 className="text-[2.4rem] sm:text-5xl bg-blue p-2 text-white leading-tight font-bold  max-w-xl">
          My works
        </h1>
        <h3 className="text-gray-300 mb-10  text-xl">
          Explore the following projects.
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10 justify-center ">
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
