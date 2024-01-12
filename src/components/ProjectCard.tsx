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
      className={`w-full flex  max-lg:flex-col max-xl:flex-col  items-start lg:items-center text-start  overflow-hidden justify-start  ${
        isEvenId ? "" : ""
      }`}
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden rounded-xl
         transition-all  border-4 hover:border-blue h-[300px] lg:h-[450px] "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1 transition-all w-full h-full   "
        />
      </Link>

      <div className="flex flex-col py-4 lg:p-10 gap-3 lg:gap-4 h-full justify-start items-start  text-md  w-full  max-w-md">
        <p className="text-4xl lg:text-5xl font-medium  ">{title}</p>

        <p className="text-lg  font-normal">{description}</p>
        <Button className="rounded w-fit p-6 font-semibold text-xl shadow tracking-tight">
          View project
        </Button>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
