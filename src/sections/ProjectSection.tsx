import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

function Projects() {
  return (
    <motion.div
      id="projects-container"
      className="flex flex-col items-center justify-center w-full min-h-fit gap-8"
    >
      <div className="grid xl:grid-cols-2 w-full  items-start gap-2">
        {projects?.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: index * 0.75 + 1 }}
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
