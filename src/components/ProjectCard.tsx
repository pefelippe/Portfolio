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
  const findX = id % 2 == 0 ? 100 : -100;

  return (
    <motion.div
      initial={{ opacity: 0, x: findX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="flex max-lg:flex-col w-full max-w-7xl justify-center lg:gap-10  mx-auto gap-2 "
    >
      <Link
        href={link}
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
        className="h-full text-[#000] flex
      w-full justify-center items-start flex-col gap-2 rounded-b-2xl max-w-2xl "
      >
        <div className="flex w-full justify-start max-md:justify-center gap-2">
          <a
            href={link}
            target="_blank"
            className="flex gap-2 items-center w-fit text-[2rem] font-bold  hover:text-gray-500 "
            rel="noreferrer"
          >
            {title}
          </a>
        </div>
        <p className="w-fit text-[1.5rem] text-gray-300">{description}</p>

        <div className="flex w-full justify-between pt-4">
          <Link
            href={`/projects/${id}`}
            className="flex gap-2 p-2 px-4 items-center w-fit text-[1.5rem] font-bold hover:underline text-white  bg-blue hover:bg-blue/90 rounded-md "
            rel="noreferrer"
          >
            Veja detalhes <FaArrowRight className="-rotate-45" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
