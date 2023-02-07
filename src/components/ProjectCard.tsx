import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
};

function ExperienceCard({
  description,
  link,
  imgUrl,
  repo,
  title,
}: IProjectCard) {
  return (
    <motion.article
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2 }}
      className="relative max-w-5xl w-full h-[350px] overflow-hidden rounded-lg mx-auto border-4 border-[#fff]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
        }}
        transition={{ duration: 1.2 }}
        src={imgUrl}
        alt="card image"
        className="relative cursor:pointer  hover:hidden w-full h-full transition-all object-cover "
      />

      <div className="absolute gap-4  inset-0  bg-[#080808] text-center flex flex-col items-center transition-all justify-center opacity-0 hover:opacity-100 bg-opacity-100 ">
        <h1 className=" text-[2rem] tracking-wider font-bold">{title}</h1>
        <p className=" text-[1.5rem] tracking-wider">{description}</p>
        <div className="flex space-x-8 pt-2">
          <Link href={link} target="_blank" rel="noopener">
            <button className="text-xl rounded-full border-4 transition-all px-10 p-3 text-[#fff] border-[#3f4de9] hover:bg-[#3f4de9]">
              Demo
            </button>
          </Link>

          <Link href={repo} target="_blank" rel="noopener">
            <button className="text-xl rounded-full border-4 transition-all px-10 p-3 text-[#fff] border-[#3f4de9] hover:bg-[#3f4de9]">
              Código
            </button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
