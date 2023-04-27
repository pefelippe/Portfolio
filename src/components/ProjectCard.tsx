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
      className="flex flex-col gap-6 
    justify-start mx-auto rounded-xl  w-full "
    >
      <Link
        href={link}
        className="transition-all overflow-hidden w-full flex-shrink-0 rounded-2xl h-[270px] shadow md:max-w-[450px] border-2 hover:text-blue "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className=" object-cover h-full w-full hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div className=" text-[#000] flex items-center h-full justify-between  flex-col gap-4   text-center max-w-xl">
        <div className="flex flex-col gap-4 text-center items-center">
          <a
            href={link}
            target="_blank"
            className=" text-[#000] gap-2 items-center w-fit text-[2rem] font-bold "
            rel="noreferrer"
          >
            {title}
          </a>
          <p className="text-[1.3rem] text-gray-500 max-w-md">{description}</p>
        </div>

        <div className="  flex max-md:flex-col w-full justify-center font-semibold text-xl items-center gap-4">
          <Link
            href={repo}
            target="_blank"
            className="flex gap-2 bg-[#000] text-[#fff] items-center hover:bg-[#000]/80 transition-all text-xl border-2 justify-center rounded-xl w-full md:max-w-[150px] py-3"
          >
            Código <FaGithub className="h-7 w-7 " />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex gap-4 items-center bg-blue hover:bg-blue/80 text-white transition-all text-xl border-2 justify-center rounded-xl w-full md:max-w-[150px] py-3"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
