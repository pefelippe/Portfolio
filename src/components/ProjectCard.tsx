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
      className="w-full flex flex-col h-full items-start text-start justify-start gap-3 
     relative rounded-2xl overflow-hidden  hover:border-blue "
    >
      <Link href={`projects/${id}`} className=" ">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover border-[#101010] hover:border-blue  rounded-2xl border w-full  min-h-[300px]"
        />
      </Link>

      <div className="flex flex-col gap-2 justify-center items-start  w-full text-md ">
        <p className="text-3xl font-semibold">{title}</p>
        <Skills technologies={stack} />
        <p className="text-md font-normal ">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
