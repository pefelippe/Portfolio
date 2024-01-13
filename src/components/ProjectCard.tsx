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
      className="w-full flex  max-lg:flex-col xl h-full overflow-hidden gap-4
        items-center lg:items-center text-start  justify-start "
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden 
        x w-full h-[350px] sm:h-[500px] lg:h-[400px]  border rounded-md"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover flex-shrink-1x w-full h-full   "
        />
      </Link>

      <div className="flex flex-col gap-6 justify-start items-start h-full max-h-[250px] text-md  w-full  lg:px-6">
        <div className="flex flex-col gap-3">
          <p className="text-3xl font-bold">{title}</p>
          <Skills technologies={stack} />
          <p className="text-lg font-normal ">{description}</p>
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
