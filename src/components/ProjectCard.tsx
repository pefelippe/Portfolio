import { motion } from "framer-motion";
import Link from "next/link";
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
      whileHover={{ scale: 1.03 }}
      className="flex flex-col bg-[#141418] rounded-xl shadow-lg overflow-hidden h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className="relative w-full overflow-hidden  "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={imgUrl}
          alt={title}
          className={`w-full h-56 object-cover transition-all duration-300  ${
            isHovered ? "scale-110 blur-sm" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4">
            <p className="text-white text-center text-sm">{description}</p>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 ">
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
        {/* <div className="flex justify-between mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-gray-700 text-white hover:bg-gray-600"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link || repo, "_blank", "noopener,noreferrer");
            }}
          >
            {link ? (
              <>
                <Rocket className="mr-2 h-4 w-4" /> Demo
              </>
            ) : (
              <>
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> Repo
              </>
            )}
          </Button>
          {link && (
            <Button
              variant="outline"
              size="sm"
              className="bg-gray-700 text-white hover:bg-gray-600"
              onClick={(e) => {
                e.stopPropagation();
                window.open(repo, "_blank", "noopener,noreferrer");
              }}
            >
              <GitHubLogoIcon className="mr-2 h-4 w-4" /> Repo
            </Button>
          )}
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
