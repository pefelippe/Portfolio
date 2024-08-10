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
      className="flex flex-col items-center justify-center w-full min-h-fit gap-8"
    >
      <div className="grid xl:grid-cols-2 w-full  items-start gap-2">
        {projects?.map((proj) => (
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
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
