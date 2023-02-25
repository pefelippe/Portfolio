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
    <motion.a
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      className="flex flex-col text-white shadow-xl rounded-xl border-2 border-[#242424]  bg-[#121212]  hover:border-[#5865f2] "
      href=""
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover h-[250px] md:h-[350px]  w-full "
      />

      <p className="font-bold text-xl py-4 md:py-8">{title}</p>
    </motion.a>
  );
}

export default ExperienceCard;
