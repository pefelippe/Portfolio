import { motion } from "framer-motion";
import { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Rocket } from "lucide-react";

import { Button } from "./ui/button";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
  id: number;
};

function ProjectCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
  id,
}: IProjectCard) {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    window.open(link || repo, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col bg-gray-800 rounded-md shadow-2xl overflow-hidden h-full cursor-pointer transition-transform duration-300"
      onClick={handleCardClick}
    >
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={imgUrl}
          alt={title}
          className={`w-full h-80 object-cover transition-transform duration-300 ${
            isHovered ? "scale-110 blur-sm" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 transition-opacity duration-300">
            <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white text-center text-sm">{description}</p>
          </div>
        )}
      </div>
      {/* <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700 rounded-full text-xs text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
