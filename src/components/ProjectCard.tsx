import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="flex flex-col max-w-[600px] max-md:max-w-[400px] mx-auto ">
      <Link
        href={`/projects/${id}`}
        className="transition-all rounded-2xl border-2 border-[#303030]
        overflow-hidden min-h-[350px] max-lg:min-h-[250px] "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="w-full h-full  object-cover hover:scale-105 ease-in-out transition-all"
        />
      </Link>

      <div
        className="h-full text-[#fff] flex pt-4
      w-full justify-start items-start  flex-col gap-2 rounded-b-2xl"
      >
        <a
          href={link}
          target="_blank"
          className="w-fit text-2xl font-bold underline"
          rel="noreferrer"
        >
          {title}
        </a>
        <p className="w-fit text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
