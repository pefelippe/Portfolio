import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "./ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import { ArrowRight } from "lucide-react";
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
      className="w-full flex  max-lg:flex-col xl h-full overflow-hidden 
        items-start lg:items-center text-start  justify-start gap-6 lg:gap-12"
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden 
        w-full h-[350px] sm:h-[500px] lg:h-[400px]  border rounded-md max-w-3xl"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1 w-full h-full   "
        />
      </Link>

      <div className="flex flex-col gap-6 justify-between items-start md:max-h-[250px] text-md  w-full  max-w-md ">
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold">{title}</p>
          <Skills technologies={stack} />
          <p className="text-lg font-thin ">{description}</p>
        </div>

        <div
          className="rounded flex gap-2 justify-center items-center w-fit
         hover:text-blue font-semibold text-xl tracking-tight"
        >
          <button>View project</button> <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
