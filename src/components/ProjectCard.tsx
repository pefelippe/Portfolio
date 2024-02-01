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
      className="w-full flex flex-col h-full overflow-hidden items-start text-start justify-between 
     relative bg-gray-100/30  rounded-md shadow "
    >
      {/* <div className="flex flex-col gap-2 justify-start items-start  text-md">
        <p className="text-4xl font-semibold">{title}</p>
        <p className="text-lg font-light ">{description}</p>
      </div> */}
      <Link
        href={link}
        target="_blank"
        className=" overflow-hidden border-2 border-[#101010] hover:border-blue
        w-full  h-full "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover w-full h-full  min-h-[300px] "
        />
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
