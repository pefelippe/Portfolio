import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "../../src/components/ProjectCard";
import Pagination from "../../src/components/Pagination";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"stars" | "recent">("stars");
  const projectsPerPage = 6;

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch(
        "https://api.github.com/users/pefelippe/repos?per_page=100",
      );
      const data: GitHubRepo[] = await response.json();
      const sortedData = sortProjects(data, sortBy);
      setProjects(sortedData);
    }
    fetchProjects();
  }, [sortBy]);

  const sortProjects = (data: GitHubRepo[], sort: "stars" | "recent") => {
    return [...data].sort((a, b) =>
      sort === "stars"
        ? b.stargazers_count - a.stargazers_count
        : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject,
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-md:px-4 md:p-0  px-4 sm:px-6 lg:px-8 mt-32 mb-8 max-w-screen-2xl min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <h2 className="text-xl text-gray-400 mb-4">
        Explore my latest work and contributions
      </h2>

      <div className="mb-10">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "stars" | "recent")}
          className="p-2 border rounded"
        >
          <option value="stars">Sort by Stars</option>
          <option value="recent">Sort by Most Recent</option>
        </select>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.name}
              description={project.description || "No description available"}
              link={project.homepage || project.html_url}
              repo={project.html_url}
              stack={project.topics}
              imgUrl={`https://opengraph.githubassets.com/1/${project.name}`}
            />
          </motion.div>
        ))}
      </motion.div>
      <Pagination
        projectsPerPage={projectsPerPage}
        totalProjects={projects.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </motion.div>
  );
}
