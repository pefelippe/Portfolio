import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";
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
      className="relative flex min-h-fit h-full items-start text-start lg:flex-row gap-2
       justify-center flex-col w-full rounded "
    >
      <Link
        href={link}
        className="relative shadow rounded overflow-hidden w-full h-full min-h-[250px] lg:min-h-[400px] xl:min-h-[600px]"
        target="_blank"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full rounded h-full min-h-[250px] lg:min-h-[400px] xl:min-h-[600px] "
        />
      </Link>

      <div className="w-full max-w-xl flex flex-col gap-6 items-start justify-center h-full lg:px-10  my-auto">
        <div className="w-full flex flex-col gap-4 items-start justify-center py-4 h-full">
          <p className="text-3xl lg:text-4xl font-extrabold">{title}</p>
          <Skills technologies={stack} />
          <p className="text-xl  ">{description}</p>
        </div>

        <div className="flex max-md:flex-col w-full gap-6 ">
          <Link href={link} className="relative" target="_blank">
            <Button className="flex items-center gap-2 p-7 px-12 rounded text-lg  max-sm:w-full ">
              <p>Live Demo</p>
            </Button>
          </Link>

          <Link href={repo} className="relative" target="_blank">
            <Button
              variant={"outline"}
              className="flex items-center gap-2 p-7 px-12 rounded text-lg font-medium  max-sm:w-full border text-[#101010]"
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
