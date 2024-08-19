import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      id="projects-container"
      className="flex flex-col items-start justify-center w-full gap-8 min-h-fit"
    >
      <div className="grid items-start w-full gap-2 xl:grid-cols-3">
        {projects?.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: index * 0.5 + 1 }}
          >
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
