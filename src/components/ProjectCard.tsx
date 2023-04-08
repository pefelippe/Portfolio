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
  const findX = id % 2 === 0 ? -100 : 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: findX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex max-lg:flex-col w-full  justify-between  mx-auto gap-2 "
    >
      <Link
        href={link}
        className="transition-all rounded-2xl border-2 border-[#303030] hover:border-[#505050]
        overflow-hidden h-[330px] max-lg:h-[250px] w-full max-w-lg mx-auto "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="w-full h-full  object-cover hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div
        className="h-full max-lg:h-fit text-[#fff] flex mx-auto
       justify-center items-start flex-col gap-2 rounded-b-2xl max-w-xl w-fit"
      >
        <div className="flex w-full justify-start  gap-2">
          <a
            href={link}
            target="_blank"
            className="flex gap-2 items-center w-fit text-[2rem] font-bold  hover:text-gray-500 underline"
            rel="noreferrer"
          >
            {title}
          </a>
        </div>
        <p className="w-fit text-normal md:text-[1.5rem] text-gray-300 max-w-md">
          {description}
        </p>

        <div className="flex max-sm:flex-col w-full max-md:justify-center items-center gap-4 pt-2">
          <Link
            href={`/projects/${id}`}
            className="flex gap-2 p-3 px-6 items-center w-fit text-[1.5rem] justify-center max-sm:w-full
             font-semibold hover:underline text-white bg-blue rounded-lg transition-all "
            rel="noreferrer"
          >
            <p>Veja detalhes</p>
          </Link>
          <Link
            href={repo}
            target="_blank"
            className="flex gap-3 p-3 px-6 items-center w-fit text-[1.5rem] justify-center max-sm:w-full
             font-semibold hover:underline text-white bg-black rounded-lg transition-all border-2 border-blue"
            rel="noreferrer"
          >
            <FaGithub />
            <p>Código</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
