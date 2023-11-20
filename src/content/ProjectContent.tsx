import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      id="work"
      className=" flex flex-col w-full items-start  justify-start  max-w-7xl max-xl:px-6 text-white gap-4"
    >
      <div className="flex justify-between items-start   w-full   gap-5">
        <h1 className="text-4xl font-thin  text-gray-300">Featured projects</h1>
        {/* <h3 className="text-gray-300  text-xl max-w-md text-md">
          I work remotely with clients of all sizes right around the world.
          <br />
          <br /> As well as client work, I have also created a number of
          personal projects that allow me to explore new skills.
        </h3> */}

        <p className="text-xl text-blue underline font-semibold">
          View more recent projects ⟶
        </p>
      </div>
      <div className="w-full"></div>
      <div className="grid lg:grid-cols-2 gap-10 justify-center ">
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
