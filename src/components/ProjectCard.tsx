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
      className="flex md:flex-row flex-col w-full justify-between max-w-5xl
       rounded-lg mx-auto transition-all  text-[#fff] bg-[#101010] hover:bg-[#121212] border-[#141414] border-4  overflow-hidden"
    >
      <motion.div className="p-10  w-full flex flex-col justify-center gap-4 ">
        <p className="items-center text-[3rem] tracking-wider font-bold break-words text-gray-200 ">
          {description}
        </p>

        <div className="flex items-center gap-8 font-semibold text-xl   ">
          <Link href={link} target="_blank" rel="noopener">
            <button className="flex items-center gap-2 hover:underline hover:text-[#4454fa]/80 ">
              Live Demo <FaAngleRight />
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-fill  xl:max-w-lg max-h-[500px]"
      />
    </motion.article>
  );
}

export default ExperienceCard;
