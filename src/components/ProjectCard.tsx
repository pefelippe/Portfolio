import { motion } from "framer-motion";
import Link from "next/link";

import { Skills } from "./Skills";
import { Button } from "./ui/button";
import { LinkIcon } from "lucide-react";

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
      className="relative flex  h-full items-start text-start justify-start min-h-fit  p-4 bg-white w-full lg:gap-5 max-lg:flex-col
    rounded overflow-hidden border"
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="overflow-hidden object-cover rounded border w-full h-full min-h-[350px]lg:min-h-[430px] "
      />

      <div className="w-full flex flex-col gap-6 max-w-lg pt-8">
        <p className="text-3xl font-bold">{title}</p>
        <Skills technologies={stack} />
        <p>{description}</p>
        <Link href={link} className="relative" target="_blank">
          <Button className="flex items-center gap-2">
            <LinkIcon /> <p>Live</p>
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
