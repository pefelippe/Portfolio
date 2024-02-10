import { motion } from "framer-motion";
import Link from "next/link";

import { Skills } from "./Skills";

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
      className="w-full flex flex-col h-full items-start text-start justify-start 
     relative rounded-2xl  overflow-hidden bg-white hover:border-blue  border-2 "
    >
      <Link href={`projects/${id}`} className="relative">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover rounded-t-2xl border-b w-full min-h-[250px] md:min-h-[300px]"
        />

        <div
          className="absolute inset-0 flex flex-col gap-1 justify-center items-start w-full
         text-md p-4 py-3 bg-black bg-opacity-100 opacity-0 hover:opacity-100 transition-opacity"
        >
          <p className="text-xl md:text-3xl font-bold tracking-tight text-blue">
            {title}
          </p>
          <p className="text-sm md:text-base font-normal text-white tracking-wide">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
