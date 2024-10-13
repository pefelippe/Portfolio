import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

function FeaturedProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div className=" ">
      {featuredProjects.map((project, index) => (
        <>
          <h1 className="text-3xl font-bold leading-tight tracking-tight mb-4">
            Personal Projects
          </h1>
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        </>
      ))}
    </motion.div>
  );
}

export default FeaturedProjectsSection;
