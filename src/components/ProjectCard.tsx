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
    <motion.div className="shadow flex flex-col w-full justify-between  mx-auto gap-2 rounded-2xl min-w-fit max-w-[450px]  bg-[#fff]">
      <Link
        href={link}
        className="transition-all overflow-hidden w-full max-h-[300px] rounded-t-2xl"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="h-full w-full object-cover hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div
        className="max-lg:h-fit text-[#000] flex 
       justify-center items-center flex-col gap-4  p-5 w-fit max-lg:text-center "
      >
        <a
          href={link}
          target="_blank"
          className=" text-[#000] gap-2 items-center w-fit text-[2.2rem] font-bold underline py-2"
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="w-fit text-[1.3rem] text-[#191919] max-w-md">
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

          {/* <Link
            href={repo}
            target="_blank"
            className="flex items-center justify-center font-semibold hover:underline  bg-black rounded-lg transition-all "
            rel="noreferrer"
          >
            <FaGithub className="h-8 w-8" />
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
