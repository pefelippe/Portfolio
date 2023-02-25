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
      className="flex flex-col text-white shadow-xl rounded-xl border-2 border-[#202020]  bg-[#121212] p-4 hover:border-[#5865f2] gap-4"
      href=""
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover xl:h-[250px] xl:max-w-[400px] w-full rounded-xl border-2 border-[#141414]"
      />

      <p className="font-bold text-xl">{title}</p>
    </motion.a>
  );
}

export default ExperienceCard;
