import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
};

function ExperienceCard({ description, link, imgUrl }: IProjectCard) {
  return (
    <motion.article
      initial={{ y: 40 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 2 }}
      className="relative min-w-[350px] h-[300px] overflow-hidden rounded-lg"
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
        className="relative cursor:pointer  hover:hidden w-full h-full transition-all object-cover border-4 border-[#464545]"
      />

      <div className="absolute gap-4  inset-0  bg-[#080808] text-center flex flex-col items-center transition-all justify-center opacity-0 hover:opacity-100 bg-opacity-100 ">
        <h1 className=" text-[1.5rem] tracking-wider">{description}</h1>
        <div className="flex space-x-4 pt-2">
          <Link href={link}>
            <button className="text-xl rounded-full border-2 transition-all px-8 p-3 text-[#fff] border-[#3f4de9] hover:bg-[#3f4de9]">
              Visite o site
            </button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
