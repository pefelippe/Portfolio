import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowBottomLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      className="w-full flex flex-col h-full overflow-hidden 
        items-start text-start  justify-start gap-4 "
    >
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden 
        w-full h-full min-h-[350px] md:min-h-[450px] lg:min-h-[350px] border rounded-md hover:rounded-[50px]"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover  w-full h-full   "
        />
      </Link>

      <div className="flex flex-col gap-3 justify-start items-start  text-md ">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-medium">{title}</p>
          {/* <Skills technologies={stack} /> */}
          {/* <p className="text-lg font-normal ">{description}</p> */}
        </div>

        {/* <div
          className="rounded flex gap-2 justify-center items-center w-fit
         hover:text-blue font-semibold text-xl tracking-tight"
        >
          <button>View project</button> <ArrowRight className="h-4 w-4" />
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
