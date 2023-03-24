import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";

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
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex max-lg:flex-col w-full max-w-7xl justify-center lg:gap-10  mx-auto gap-2 "
    >
      <Link
        href={`/projects/${id}`}
        className="transition-all rounded-2xl border-2 border-[#303030] hover:border-[#505050]
        overflow-hidden min-h-[400px] max-lg:min-h-[250px] w-full"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="w-full h-full  object-cover hover:scale-105 ease-in-out transition-all"
        />
      </Link>

      <div
        className="h-full text-[#fff] flex
      w-full justify-center items-start flex-col gap-2 rounded-b-2xl max-w-2xl "
      >
        <div className="flex w-full justify-start max-md:justify-center gap-2">
          <a
            href={link}
            target="_blank"
            className="flex gap-2 items-center w-fit text-[2rem] font-bold underline hover:text-gray-500 "
            rel="noreferrer"
          >
            {title} <FaArrowRight className="-rotate-45" />
          </a>
          {/* <a
            href={repo}
            target="_blank"
            className="p-2 rounded-md bg-[#303030] hover:bg-[#222222] max-w-md"
            rel="noreferrer"
          >
            <FaGithub className="h-5 w-5 " />
          </a> */}
        </div>
        <p className="w-fit text-[1.5rem] text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
