import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

function FeaturedProjectsSection() {
  // Select the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div className=" ">
      {/* <div className="flex flex-col md:flex-row justify-center items-center mb-6">
        <h2 className="text-5xl font-bold  text-indigo-500 mb-10">
          Featured Projects
        </h2>
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 + index * 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default FeaturedProjectsSection;
