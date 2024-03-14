import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkIcon, MoveRight } from "lucide-react";
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
    <div
      className="relative flex  h-full items-start text-start  gap-5 md:gap-10 
       justify-center max-md:flex-col-reverse w-full text-[#101010] transition-all"
    >
      <div className="max-w-xs flex flex-col gap-3 justify-start items-start text-start w-full text-md  text-[#212531">
        <p className="text-xl md:text-3xl font-semibold tracking-tight">
          {title}
        </p>
        <p className="text-sm md:text-base font-normal ">{description}</p>
        <Link
          href={"/projects/" + id}
          className="pt-1 text-base md:text-xl font-semibold flex items-center gap-2 hover:text-[#101010]/70"
        >
          <MoveRight /> View Project
        </Link>
      </div>
      <Link
        href={"/projects/" + id}
        className="relative shadow  overflow-hidden w-full h-full  "
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-[300px] md:min-h-[60vh]  rounded-md border"
        />
      </Link>
    </div>
  );
}

export default ProjectCard;
