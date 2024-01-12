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
      className="w-full flex  flex-col xl h-fit border-2 overflow-hidden 
        rounded-3xl items-center lg:items-center text-start bg-white  justify-start"
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden 
         transition-all w-full h-[500px] border-b"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1 transition-all w-full h-full   "
        />
      </Link>

      <div className="flex flex-col gap-5 h-full justify-start items-start  text-md  w-full   p-8">
        <div>
          <p className="text-3xl font-bold pb-1 ">{title}</p>

          <p className="text-lg font-normal">{description}</p>
        </div>
        <Button className="rounded w-fit p-6 font-semibold text-xl shadow tracking-tight">
          View project
        </Button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
