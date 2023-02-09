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
      className="relative flex items-center flex-col min-w-[1/2] rounded-xl mx-auto
        transition-all   text-[#fff] "
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.1 },
        }}
        src={imgUrl}
        alt="card image"
        className="object-contain  mx-auto h-[350px] rounded-3xl  border-[#414040] border-4 hover:border-[#5865f2]"
      />

      <h1 className=" text-[2rem] tracking-wider font-bold pt-4">{title}</h1>

      <div className="flex justify-center gap-8 font-semibold text-xl text-[#5865f2] pt-2">
        <Link href={link} target="_blank" rel="noopener">
          <button className="hover:underline">Demo</button>
        </Link>

        <Link href={repo} target="_blank" rel="noopener">
          <button className="hover:underline">Código</button>
        </Link>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
