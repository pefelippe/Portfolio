import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

import { Skills } from "./Skills";
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
  const isEvenId = id % 2 === 0;

  const initialX = isEvenId ? 50 : -50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-fit h-full items-start text-start  hover:opacity-80
       justify-center flex-col w-full "
    >
      <Link
        href={link}
        className="relative shadow  overflow-hidden w-full h-full min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] rounded"
        target="_blank"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full  h-full"
        />

        <div
          className="absolute inset-0 flex flex-col gap-1 justify-center items-start w-full text-md p-6 py-3
         bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity"
        >
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-white">
            {title}
          </p>
          <p className="text-sm md:text-xl font-normal text-white">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
