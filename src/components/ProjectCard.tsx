import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaAngleRight, FaGithub } from "react-icons/fa";

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
    <motion.article className="flex  flex-col w-full justify-between mx-auto rounded-md transition-all xl:flex-row gap-4 xl:gap-8">
      <Link href={repo} target="_blank" rel="noopener">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-contain border-[#141414] hover:border-[#202020] border-4 rounded-xl w-[500px] "
        />
      </Link>

      <motion.div className=" xl:mr-20 flex flex-col   justify-center gap-2 w-full xl:w-[200px] ">
        <p className="items-center text-[2rem] md:text-[2.5rem] tracking-wider font-bold  text-gray-200 underline decoration-[#5865f2] ">
          {description}
        </p>

        <Link href={repo} target="_blank" rel="noopener">
          <button className="flex items-center hover:gap-1 transition-all hover:underline hover:text-[#4454fa]/80 font-semibold">
            Live Demo <FaAngleRight />
          </button>
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default ExperienceCard;
