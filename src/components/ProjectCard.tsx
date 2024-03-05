import { motion } from "framer-motion";
import { GithubIcon, Rocket } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { technologies } from "../constants";

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
      className="relative flex min-h-fit h-full items-center text-start  hover:opacity-80 rounded-3xl overflow-hidden 
       justify-center max-md:flex-col-reverse w-full bg-[#212531]"
    >
      <div className="w-full md:w-fit flex flex-col gap-4 items-start text-start text-md p-6 md:p-16 h-full">
        <div className="flex flex-col gap-3">
          <p className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
            {title}
          </p>
          <p className="text-base md:text-lg  text-[#95979D] max-w-md font-normal">
            {description}
          </p>
          <div className="flex gap-3 text-gray-100">
            {stack.map((tech) => (
              <span
                key={tech}
                className="text-base md:text-lg max-w-md font-medium"
              >
                #{tech}
              </span>
            ))}
          </div>
          <motion.div className="flex  flex-col gap-4 font-medium text-2xl w-full pt-3">
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
      <Link href={`projects/${id}`} className=" w-full h-full rounded">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[280px] lg:min-h-[500px]  "
        />
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
