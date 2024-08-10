import { useState } from "react"; // Adicione esta importação
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, Rocket } from "lucide-react";
import Link from "next/link";

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
      className="relative flex h-full items-center text-start gap-6 lg:gap-12 justify-center max-lg:flex-col w-full transition-all "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        target="_blank"
        href={link}
        className="relative shadow overflow-hidden w-full h-full rounded-2xl border-2 hover:border-blue/90"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={imgUrl}
          alt="card image"
          className={`overflow-hidden object-cover w-full h-full min-h-[350px] xl:min-h-[480px]  ${
            isHovered ? "blur-sm" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute px-10 inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white gap-2">
            <p className="text-3xl font-bold underline">{title}</p>
            <p className="text-lg font-medium text-[#fff]  max-w-sm text-center">
              {description}
            </p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default ProjectCard;
