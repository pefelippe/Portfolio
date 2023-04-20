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
    <motion.div className=" flex flex-col justify-start mx-auto rounded-2xl w-[400px] ">
      <Link
        href={link}
        className="transition-all overflow-hidden h-[300px] w-full rounded-2xl "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className=" object-cover h-full w-full hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div
        className=" text-[#000] flex pt-4
       justify-center  flex-col gap-2  w-fit text-start "
      >
        <a
          href={link}
          target="_blank"
          className=" text-[#000] gap-2 items-center w-fit text-[1.8rem] font-semibold underline"
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="text-[1.2rem] text-[#191919] max-w-md">{description}</p>

        {/* <div className="flex  w-full justify-center items-center gap-4 pt-2 max-lg:px-8 mx-auto">
          <Link
            href={`/projects/${id}`}
            className="flex gap-2 p-3 px-6 items-center  text-[1.5rem] justify-center w-fit
             font-semibold hover:underline text-white bg-blue rounded-lg transition-all "
            rel="noreferrer"
          >
            <p>Veja detalhes</p>
          </Link>

          <Link
            href={repo}
            target="_blank"
            className="flex items-center justify-center font-semibold hover:underline  bg-black rounded-lg transition-all "
            rel="noreferrer"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
