import { motion } from "framer-motion";
import Link from "next/link";

import React from "react";

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
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-fit text-white shadow-xl rounded-xl  max-lg:gap-8 text-center"
    >
      <div
        className={`relative mx-auto w-fit flex flex-col  justify-between gap-4 xl:gap-20 ${
          id % 2 != 0 ? " xl:flex-row  " : "xl:flex-row-reverse "
        }} `}
      >
        <Link href={`/projects/${id}`}>
          <motion.img
            src={imgUrl}
            alt="card image"
            className="object-cover max-w-[600px] w-full
          lg:w-[600px] lg:h-[400px] min-h-[280px] min-w-[420px]
          rounded-2xl mx-auto border-2 border-[#242424]"
          />
        </Link>

        <div className=" flex flex-col justify-center  mx-auto max-w-xl gap-6 xl:gap-8  ">
          <p className="font-bold text-4xl max-xl:text-3xl">{title}</p>
          <p className="text-2xl max-xl:text-xl">{description}</p>
          <div className="gap-6 xl:gap-8 w-full justify-center flex text-lg font-semibold tracking-[1px]">
            <a
              href={repo}
              className="flex gap-4 w-full py-3 border-2 items-center justify-center hover:underline border-[#5865f2] hover:bg-[#5865f2]/30 transition-all rounded-full"
            >
              Código
            </a>
            <a
              href={link}
              className="flex w-full py-4 items-center justify-center hover:underline  bg-[#5865f2] hover:bg-[#5865f2]/80 transition-all rounded-full"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
