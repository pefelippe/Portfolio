import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub, FaLink } from "react-icons/fa";

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
  return (
    <motion.div
      className="flex  max-md:flex-col gap-10
      mx-auto rounded-xl  w-full text-[#000] 
      items-center justify-start 
      text-center "
    >
      <Link
        href={link}
        className="transition-all overflow-hidden md:h-[350px] 
        flex-shrink-0 rounded-2xl w-full max-w-lg "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className=" object-cover h-full w-full hover:scale-105 
          ease-in-out transition-all "
        />
      </Link>

      <div
        className="p-5  flex flex-col  gap-4 xs
       text-start items-start  w-fit h-fit rounded-md max-w-sm"
      >
        <a
          href={link}
          target="_blank"
          className=" text-[#000] gap-2  w-fit text-[2rem] font-semibold "
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="text-[1.3rem] text-gray-500 max-w-md">{description}</p>

        <div
          className="flex w-full max-w-sm  justify-center 
        font-semibold text-xl items-center gap-2"
        >
          <Link
            href={repo}
            target="_blank"
            className="flex bg-[#000] text-[#fff] items-center
             hover:bg-[#000]/80 transition-all text-xl border-2 
             justify-center rounded-full w-fit p-3"
          >
            <FaGithub className="h-7 w-7 " />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex gap-4  items-center bg-blue hover:bg-blue/80
             text-white transition-all text-xl 
            border-2 justify-center rounded-full w-full  py-3"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
