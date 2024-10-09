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
      whileHover={{ scale: 1.01 }}
      className="flex flex-col bg-gray-800 border-2 border-gray-500 rounded-md  overflow-hidden 
      h-full cursor-pointer transition-transform duration-300"
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
          className={`w-full min-h-[280px] md:min-h-[450px] object-cover transition-transform duration-300 ${
            isHovered ? "scale-110 blur-sm" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 transition-opacity duration-300">
            <h3 className="text-xl md:text-4xl font-bold mb-2 text-white">
              {title}
            </h3>
            <p className="text-white text-center text-sm md:text-xl">
              {description}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
