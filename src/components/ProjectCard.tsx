import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

import { Skills } from "./Skills";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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
      className="relative flex min-h-fit h-full items-start text-start lg:flex-row
       justify-center  flex-col w-full  bg-gray-100 rounded  border"
    >
      <Link href={link} className="relative" target="_blank">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[250px] lg:min-h-[400px] xl:min-h-[500px] "
        />
      </Link>

      <div className="w-full flex flex-col gap-4 items-start justify-center h-full lg:px-10 p-8 ">
        <Skills technologies={stack} />
        <div className="w-full flex flex-col gap-4 items-start justify-center py-4">
          <p className="text-3xl lg:text-4xl font-extrabold">{title}</p>
          <p className="text-xl ">{description}</p>
        </div>

        <div className="flex w-full gap-5 ">
          <Link href={link} className="relative" target="_blank">
            <Button className="flex items-center gap-2 p-6 px-12 rounded text-lg">
              <p>Live Demo</p>
            </Button>
          </Link>

          <Link href={repo} className="relative" target="_blank">
            <Button
              variant={"outline"}
              className="flex items-center gap-2 p-6 px-12 rounded text-lg font-medium"
            >
              <GitHubLogoIcon className="h-6 w-6" /> <p>Github</p>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
