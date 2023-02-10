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
      className="relative w-full max-w-4xl xl:gap-10 flex items-center  flex-col xl:flex-row  
      justify-center rounded-lg mx-auto transition-all  text-[#fff]  px-8 "
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={imgUrl}
        alt="card image"
        className="object-contain  mx-auto  transition-all border-[#242424]  border-4 rounded-lg "
      />

      <div className=" flex flex-col w-full py-3">
        <p className="text-[2rem] md:text-[3rem] tracking-wider font-bold">
          {description}
        </p>

        <div className="flex justify-start gap-8 font-semibold text-xl text-[#fff] pt-2">
          <Link href={link} target="_blank" rel="noopener">
            <button className="underline hover:text-[#4454fa]">Demo</button>
          </Link>

          <Link href={repo} target="_blank" rel="noopener">
            <button className="underline hover:text-[#4454fa]">Código</button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
