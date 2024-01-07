import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1.5 }}
      id="work"
      className=" flex flex-col w-full items-start  justify-center text-[#101010] gap-12 mx-auto "
    >
      <h1 className="text-[40px] xl:text-6xl  font-bold tracking-tighter font-mono">
        Meet some of my{" "}
        <span className="underline underline-offset-4 decoration-blue">
          works
        </span>
        .
      </h1>

      <div className="flex flex-col gap-10 md:gap-20 justify-center w-full items-center ">
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
