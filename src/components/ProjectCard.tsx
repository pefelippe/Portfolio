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
    <Link
      href={`/projects/${id}`}
      className="w-full gap-4 flex flex-col shadow-xl
       bg-[#000] hover:scale-105 ease-in-out transition-all z-50  overflow-hidden "
    >
      <div
        className="flex flex-col items-start shadow-xl  overflow-hidden 
         h-[400px]  max-xl:h-[300px] "
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="w-full object-cover  
          h-[400px] max-xl:h-[300px] border-2 border-[#303030] rounded-2xl"
        />
      </div>

      <div className="flex w-full justify-center items-center pb-4 flex-col gap-2">
        <p className="w-fit text-[1.5rem] font-bold">{title}</p>
      </div>
    </Link>
  );
}

export default ProjectCard;
