import { motion } from "framer-motion";
import { GithubIcon, Rocket } from "lucide-react";
import Link from "next/link";

import { technologies } from "../constants";
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
      className=" flex   rounded-md overflow-hidden w-full min-w-fit h-full
       justify-center max-lg:flex-col  bg-[#212531]"
    >
      <Link href={`projects/${id}`} className=" w-full h-full rounded">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[300px] md:min-h-[450px]   "
        />
      </Link>

      <div className="relative w-full lg:max-w-lg  flex flex-col gap-4 items-start text-start text-md p-6 md:p-8 h-full my-auto">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
            {title}
          </p>
          <p className="text-base md:text-xl  text-[#95979D]  font-normal">
            {description}
          </p>
          <div className="flex gap-4 text-gray-100">
            {stack.map((tech) => (
              <span key={tech} className="text-base md:text-lg font-medium">
                #{tech}
              </span>
            ))}
          </div>

          <motion.div className="flex  flex-col gap-4 font-medium text-2xl  relative w-auto pt-4">
            <Link href={repo} target="_blank" className="w-full">
              <Button
                variant={"outline"}
                className="p-7 w-full text-xl flex items-center gap-2  text-white"
              >
                <GithubIcon className="h-7 w-7" /> Github
              </Button>
            </Link>
            <Link href={link} target="_blank" className="w-full">
              <Button className="p-7 w-full text-xl flex items-center gap-2  text-white">
                <Rocket className="h-7 w-7" /> Deploy
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
