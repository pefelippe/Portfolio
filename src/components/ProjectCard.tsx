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
    <motion.article
      className="flex w-fit flex-col 
      justify-center mx-auto rounded-md transition-all md:flex-row  md:gap-8
     bg-[#080808] hover:bg-[#101010]  border-4 border-[#080808] hover:border-[#202020] "
    >
      <Link href={repo} target="_blank" rel="noopener">
        <motion.img
          src={imgUrl}
          alt="card image"
          className="object-cover md h-[350px] w-[450px]"
        />
      </Link>

      <motion.div className="p-4  flex flex-col   justify-center gap-4 w-full md:w-[300px] ">
        <div>
          <p className="items-center text-[2rem]  tracking-wider font-bold  text-gray-200 underline decoration-[#5865f2] ">
            {title}
          </p>
          <p className="items-center text-[1.1rem]  tracking-wider font-bold  text-gray-300  ">
            {description}
          </p>
        </div>

        <Link href={repo} target="_blank" rel="noopener">
          <button className="flex items-center hover:gap-1 transition-all hover:underline text-[#4454fa]/80 font-semibold">
            Live Demo <FaAngleRight />
          </button>
        </Link>
      </motion.div>
    </motion.article>
  );
}

export default ExperienceCard;
