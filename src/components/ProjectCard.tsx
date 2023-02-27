import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaCode, FaGithub } from "react-icons/fa";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
};

function ExperienceCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
}: IProjectCard) {
  return (
    <motion.article className="flex flex-col h-full max-w-[600px] text-white shadow-xl rounded-xl border-2 border-[#242424]  bg-[#121212] ">
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover h-[300px] w-full "
      />

      <div className="gap-8 flex flex-col justify-between p-10">
        <p className="font-bold text-3xl ">{title}</p>
        <div className=" grid grid-cols-4 gap-4">
          {stack?.map((item) => {
            return (
              <span
                className="text-gray-300 py-2 px-2 text-md rounded-md border-2 border-[#242424] bg-[#202020]"
                key={item}
              >
                {item}
              </span>
            );
          })}
        </div>

        <p className="text-xl ">{description}</p>

        <div className=" w-full justify-center gap-4 flex  font-semibold tracking-[1px]">
          <a
            href={repo}
            className="flex gap-4 rounded-xl  w-full py-3 border-2 items-center justify-center hover:underline border-[#5865f2] transition-all"
          >
            Código
          </a>
          <a
            href={link}
            className="flex  rounded-xl  w-full py-4 items-center justify-center hover:underline  bg-[#5865f2] transition-all"
          >
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
