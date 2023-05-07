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
  const direction = id % 2 === 0 ? -250 : 250;

  return (
    <motion.div
      initial={{ x: direction }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      className={`${
        id % 2 ? "flex-row-reverse" : ""
      }  flex max-md:flex-col mx-auto rounded-md w-full text-[#fff] justify-start
      items-center text-center max-w-4xl gap-5`}
    >
      <Link
        href={link}
        className="transition-all overflow-hidden h-[300px] 
        flex-shrink-0 rounded-md w-full md:max-w-lg hover:border-gray-700 "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className=" object-cover h-full w-full hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div
        className="p-5 w-full flex flex-col  gap-4 mx-auto
       text-center items-center  rounded-md "
      >
        <a
          href={link}
          target="_blank"
          className=" gap-2 w-fit text-[2.2rem] md:text-[2.5rem] font-semibold hover:text-gray-300 transition-all"
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="text-[1.3rem]  text-gray-300 w-full">{description}</p>

        {/* <div
          className="flex max-md:flex-col w-full   justify-center 
        font-semibold text-xl items-center gap-4"
        >
          <Link
            href={repo}
            target="_blank"
            className="flex bg-[#fff] text-[#000] items-center
             hover:bg-[#fff]/80 transition-all border-2 
             justify-center rounded-full p-3 gap-2 w-full text-2xl "
          >
            <FaGithub className="h-8 w-8 " /> <p>Código</p>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-blue hover:bg-blue/80
             text-white transition-all 
            justify-center rounded-full w-full  p-3 gap-4 x text-2xl"
          >
            Live Demo
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
