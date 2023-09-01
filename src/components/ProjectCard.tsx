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
        id % 2 ? "flex-row-reverse " : ""
      }  flex max-lg:flex-col mx-auto rounded-md w-full  justify-start 
      items-center text-start gap-20 `}
    >
      <Link href={link} className="flex h-[250px] ">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="flex-shrink-0 rounded-xl object-cover h-full w-full hover:scale-105 ease-in-out transition-all "
        />
      </Link>

      <div className="h-full flex flex-col  text-start items-start  justify-start leading-normal">
        <p className=" gap-2 w-fit text-[2.2rem]  font-semibold hover:text-gray-300 transition-all">
          {title}
        </p>
        <p className="w-fit text-[1.3rem]  text-gray-300 ">{description}</p>

        {/* <div
          className="flex  w-full  justify-center 
        font-semibold text-xl items-center gap-6 mt-2 "
        >
          <Link
            href={repo}
            target="_blank"
            className="flex bg-[#fff] text-[#000] items-center
             hover:bg-[#fff]/80 transition-all border-2 
             justify-center rounded-md w-full p-3 text-2xl gap-4"
          >
            <FaGithub className="h-8 w-8 " /> <p>Código</p>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-blue hover:bg-blue/80
             text-white transition-all 
            justify-center rounded-md w-full p-3 text-2xl"
          >
            Live Demo
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
