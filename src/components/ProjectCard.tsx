import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { GithubIcon, LinkIcon } from "lucide-react";
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
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className=" flex max-lg:flex-col gap-2 lg:gap-8 min-h-fit h-full items-start text-start  justify-center  w-full "
    >
      <Link
        href={`/projects/${id}`}
        className="relative shadow  overflow-hidden w-full h-full  rounded hover:opacity-80 "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[250px] lg:min-h-[550px] border-2 dark:border-[#222]"
        />
      </Link>

      {/* <div
        className="flex flex-col gap-2 justify-center items-start text-start text-md py-2 lg:max-w-sm  w-full h-full lg:my-auto
       hover:opacity-100 transition-opacity"
      >
        <p className="text-xl md:text-3xl font-bold tracking-tight ">{title}</p>

        <p className="text-base  dark:text-gray-300 max-w-md font-normal">
          {description}
        </p>

        <div className="flex gap-2 w-full text-sm font-medium">
          {stack.map((tech) => (
            <p key={tech} className="bg-blue w-fit px-2 py-1 text-white">
              {tech}
            </p>
          ))}{" "}
        </div>

        <div className="flex flex-col w-full gap-4 pt-3">
          <Link href={repo} target="_blank">
            <Button
              variant={"outline"}
              className="w-full  text-lg py-6 flex gap-2"
            >
              <GitHubLogoIcon className="h-6 w-6" /> Github
            </Button>
          </Link>
          <Button className="w-full text-lg py-6 text-white">Deploy</Button>
        </div>
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
