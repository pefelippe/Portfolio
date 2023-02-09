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
      className="relative flex items-center max-md:flex-col justify-between w-fit rounded-xl mx-auto border-[#242424] border-2 bg-gray-500/10 transition-all text-[#fff] p-10 gap-10"
    >
      <div className="relative gap-4  inset-0   text-center flex flex-col items-center transition-all justify-center py-5  px-10 w-2xl">
        <h1 className=" text-[2rem] tracking-wider font-bold ">{title}</h1>
        <p className=" text-[1.5rem] tracking-wider text-gray-100">
          {description}
        </p>
        <div className="flex space-x-4">
          <Link href={link} target="_blank" rel="noopener">
            <button className="text-xl rounded-xl  bg-[#5865f2]  transition-all px-8 p-3 transition-all hover:bg-[#5865f2]/80">
              Demo
            </button>
          </Link>

          <Link href={repo} target="_blank" rel="noopener">
            <button className="text-xl rounded-xl  transition-all px-8 p-3 bg-[#5865f2] transition-all hover:bg-[#5865f2]/80 ">
              Código
            </button>
          </Link>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={imgUrl}
        alt="card image"
        className="relative rounded-xl transition-all object-cover border-4 mx-auto h-[300px] w-4xl border-[#242424]"
      />
    </motion.article>
  );
}

export default ExperienceCard;
