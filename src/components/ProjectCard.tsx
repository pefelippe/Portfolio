// Adicione esta importação
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, Rocket } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <div
      className="relative flex items-center justify-center w-full h-full gap-6 transition-all text-start lg:gap-12 max-lg:flex-col "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        target="_blank"
        href={link}
        className="relative w-full h-full overflow-hidden border-2 shadow rounded-xl border-gray-100/10"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={imgUrl}
          alt="card image"
          className={`overflow-hidden object-cover w-full h-full min-h-[350px] ${
            isHovered ? "blur-sm" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-10 text-white bg-black bg-opacity-70">
            <p className="text-2xl font-bold underline">{title}</p>
            <p className="text-md font-medium text-[#fff]  max-w-sm text-center">
              {description}
            </p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default ProjectCard;
