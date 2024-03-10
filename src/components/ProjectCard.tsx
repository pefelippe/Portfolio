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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className=" flex flex-col rounded-md overflow-hidden w-full min-w-fit h-full  p-1
       justify-center max-lg:flex-col  bg-[#17191c]"
    >
      <Link href={`projects/${id}`} className=" w-full h-full rounded">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="overflow-hidden object-cover w-full h-full min-h-[250px] xl:min-h-[420px]  rounded  "
        />
      </Link>

      {/* <div className=" absolute top-0 w-full lg:max-w-xl  flex flex-col gap-10 items-start text-start text-md p-4 md:py-8 h-full my-auto">
        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl md:text-4xl font-bold tracking-tighter text-white">
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

          <motion.div className="flex w-fit  gap-3 font-medium text-lg  relative pt-4">
            <Link href={repo} target="_blank" className="w-full">
              <Button
                variant={"outline"}
                className="p-6 w-fit text-base flex items-center gap-2  text-white rounded-sm bg-[#212123] border-none"
              >
                <GithubIcon className="h-5 w-5" /> Source
              </Button>
            </Link>
            <Link href={link} target="_blank" className="w-full">
              <Button
                variant={"outline"}
                className="p-6 w-fit text-base flex items-center gap-2  text-white rounded-sm bg-[#212123] border-none"
              >
                <Rocket className="h-5 w-5" /> Live
              </Button>
            </Link>
          </motion.div>
        </div>
      </div> */}
    </motion.div>
  );
}

export default ProjectCard;
