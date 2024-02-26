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
      className="relative flex-row min-h-fit h-full items-start text-start  justify-center  w-full "
    >
      <Link
        href={link}
        className="relative shadow  overflow-hidden w-full h-full  rounded-2xl hover:opacity-80 "
        target="_blank"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[350px] rounded-2xl border-2"
        />
      </Link>

      <div
        className="flex flex-col gap-2 justify-center items-start text-start w-full text-md py-2
       hover:opacity-100 transition-opacity"
      >
        {/* <p className="text-xl md:text-2xl font-medium tracking-tight ">
          {title}
        </p> */}
        {/* <p className="text-sm dark:text-gray-300 max-w-md font-normal">
          {description}
        </p> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
