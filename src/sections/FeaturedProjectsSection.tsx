import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

function FeaturedProjectsSection() {
  // Select the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className=" "
    >
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
        <Link
          href="/projects"
          className="inline-block hover:text-gray-300  text-sm text-gray-400
           font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300  underline"
        >
          View All Projects
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <motion.div
        className="mt-8 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      ></motion.div>
    </motion.div>
  );
}

export default FeaturedProjectsSection;
