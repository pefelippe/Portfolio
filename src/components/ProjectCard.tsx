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
  const findX = id % 2 !== 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: findX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col w-full  justify-between  mx-auto gap-2 bg-[#2e3039] p-6 rounded-xl max-w-[450px]"
    >
      <Link
        href={link}
        className="transition-all rounded-2xl border-2 border-[#303030] hover:border-[#505050]
        overflow-hidden max-w-md mx-auto h-full w-fit "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="h-full w-full object-cover hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div
        className="max-lg:h-fit text-white flex 
       justify-center items-center flex-col gap-4 rounded-b-2xl  w-fit max-lg:text-center px-2"
      >
        <div className="flex w-full justify-between items-center max-lg:justify-center gap-4">
          <a
            href={link}
            target="_blank"
            className="flex gap-2 items-center w-fit text-[2.2rem] font-bold  hover:text-gray-500 underline"
            rel="noreferrer"
          >
            {title}
            <FaLink className="h-6 w-6"/>
          </a>
          <Link
            href={repo}
            target="_blank"
            className="flex items-center justify-center
             font-semibold hover:underline  bg-black rounded-lg transition-all "
            rel="noreferrer"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
        </div>
        <p className="w-fit text-[1.3rem] text-gray-300 max-w-md">
          {description}
        </p>

        <div className="flex max-sm:flex-col w-full max-md:justify-center items-center gap-4 pt-2 max-lg:px-8">
          <Link
            href={`/projects/${id}`}
            className="flex gap-2 p-3 px-6 items-center  text-[1.5rem] justify-center w-full min-w-fit
             font-semibold hover:underline text-white bg-blue rounded-lg transition-all "
            rel="noreferrer"
          >
            <p>Veja detalhes</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
