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
    <motion.article className="w-full gap-4 flex flex-col">
      <Link
        href={`/projects/${id}`}
        className="flex flex-col items-start text-white shadow-xl rounded-2xl  overflow-hidden 
         border-2 border-[#303030] h-[400px]  max-xl:h-[300px] hover:border-[#5865f2]"
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="w-full object-cover rounded-2xl hover:scale-125 ease-in-out  duration-500 
          h-[400px]  max-xl:h-[300px]"
        />
      </Link>

      <div className="flex w-full text-white justify-between items-center ">
        <p className="w-fit text-xl font-bold">{title}</p>

        <Link
          className=" flex w-fit gap-2 items-center text-xl font-semibold hover:text-[#5865f2]
         text-center rounded-full transition-all "
          href={`/projects/${id}`}
        >
          <p className="flex gap-1 justify-center items-center font-italic ">
            Ver detalhes
          </p>
          <FaArrowRight className=" h-5 w-5  -rotate-45 " />
        </Link>
      </div>
      {/* </div> */}
    </motion.article>
  );
}

export default ProjectCard;
