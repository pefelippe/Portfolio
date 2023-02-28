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
  id: number;
};

function ExperienceCard({
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
      className="h-fit 
     text-white shadow-xl rounded-xl  max-lg:gap-8 "
    >
      <div
        className={
          id % 2 != 0
            ? "relative mx-auto w-fit flex flex-col lg:flex-row justify-between"
            : "relative mx-auto w-fit flex flex-col lg:flex-row-reverse justify-between"
        }
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover min-h-[300px] w-full max-lg:max-w-[600px] lg:w-[600px] xl:h-[450px] xl:w-[700px] 
          rounded-md mx-auto border-2 border-[#242424]"
        />

        <div className=" flex flex-col justify-center  mx-auto max-w-xl gap-8 lg:px-8 ">
          <p className="font-bold text-4xl ">{title}</p>
          <div className="w-full gap-2 flex text-center text-[1rem]">
            {stack?.map((item) => {
              return (
                <span
                  className="min-w-fit text-gray-300 py-2 px-2 text-md rounded-md border-2 border-[#242424] bg-[#202020]"
                  key={item}
                >
                  {item}
                </span>
              );
            })}
          </div>

          <p className="text-xl ">{description}</p>

          <div className="gap-4 w-full justify-center flex text-lg font-semibold tracking-[1px]">
            <a
              href={repo}
              className="flex gap-4 w-full py-3 border-2 items-center justify-center hover:underline border-[#5865f2] hover:bg-[#5865f2]/30 transition-all rounded-md"
            >
              Código
            </a>
            <a
              href={link}
              className="flex w-full py-4 items-center justify-center hover:underline  bg-[#5865f2] hover:bg-[#5865f2]/80 transition-all rounded-md"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
