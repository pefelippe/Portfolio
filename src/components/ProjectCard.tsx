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
      className="relative xl:gap-10 flex xl:items-center  flex-col xl:flex-row  
      justify-center rounded-lg mx-auto transition-all  text-[#fff]  px-8 "
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-contain  mx-auto  transition-all border-[#242424]  border-4 rounded-lg w-[800px] "
      />

      <motion.div className=" flex flex-col  py-3 justify-center xl:justify-start items-center">
        <p className="items-center text-[2rem] md:text-[3rem] tracking-wider font-bold break-words ">
          {description}
        </p>

        <div className="flex gap-8 font-semibold text-xl  pt-2 text-[#4454fa]">
          <Link href={link} target="_blank" rel="noopener">
            <button className="underline hover:text-[#4454fa]/80 ">Demo</button>
          </Link>

          <Link href={repo} target="_blank" rel="noopener">
            <button className="underline hover:text-[#4454fa]/80">
              Código
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default ExperienceCard;
