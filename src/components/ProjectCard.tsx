import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
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
  const isEvenId = id % 2 === 0;

  const initialX = isEvenId ? 50 : -50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex  h-full items-start text-start  hover:opacity-80 rounded-md 
       justify-center flex-col w-full   bg-[#212531]"
    >
      <Link
        href={"/projects/" + id}
        className="relative shadow  overflow-hidden w-full h-full  "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-[500px] "
        />

        <div
          className="absolute inset-0 flex flex-col gap-1 justify-center items-center text-center w-full text-md p-6 py-3
         bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity"
        >
          <p className="text-xl md:text-3xl font-semibold tracking-tight text-white">
            {title}
          </p>
          <p className="text-sm md:text-xl font-normal text-white">
            {description}
          </p>
        </div>
      </Link>

      {/* <div className=" flex flex-col gap-3 justify-start items-start text-start w-full text-md p-8 dark:text-[#fffff9]">
        <p className="text-xl md:text-3xl font-semibold tracking-tight">
          {title}
        </p>
        <p className="text-sm md:text-lg font-normal ">{description}</p>
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
