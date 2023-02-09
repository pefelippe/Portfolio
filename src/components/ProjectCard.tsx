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
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="relative flex items-center flex-col min-w-[1/2] rounded-xl mx-auto
        border-4 bg-[#121212] transition-all  border-[#242424] text-[#fff] hover:border-[#5865f2]"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={imgUrl}
        alt="card image"
        className="object-contain  mx-auto h-[350px]"
      />

      <div className="flex flex-col justify-center  text-center  transition-all py-4 gap-4">
        <div className="gap-4">
          <h1 className=" text-[1.75rem] tracking-wider font-bold ">{title}</h1>
          <p className=" text-[1.5em]  text-gray-100">{description}</p>
        </div>

        <div className="flex justify-center gap-4 font-semibold text-xl text-[#5865f2] ">
          <Link href={link} target="_blank" rel="noopener">
            <button className="hover:underline">Demo</button>
          </Link>

          <Link href={repo} target="_blank" rel="noopener">
            <button className="hover:underline">Código</button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
