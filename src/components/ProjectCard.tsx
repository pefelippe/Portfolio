import { motion } from "framer-motion";
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
      className={`w-full flex  max-lg:flex-col max-xl:flex-col h-fit border-2 overflow-hidden 
        rounded-3xl items-start lg:items-center text-start   justify-start bg-white  ${
          isEvenId ? "" : ""}`}
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden 
         transition-all   w-full h-[400px] border-r"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1 transition-all w-full h-full   "
        />
      </Link>

      <div className="flex flex-col   gap-3 lg:gap-4 h-full justify-start items-start  text-md  w-full  max-w-xs px-10">
        <p className="text-2xl font-bold  ">{title}</p>

        <p className="text-md font-normal">{description}</p>
        <Button className="rounded w-fit p-6 font-semibold text-xl shadow tracking-tight">
          View project
        </Button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
