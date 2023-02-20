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
      className="flex  h-[250px] w-[380px] max-w-full shadow-xl rounded-xl hover:shadow-[#5865f2]/70 "
      href=""
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover md h-full w-full  rounded-xl shadow-xl border-2 border-[#242424]"
      />

      <div className=" flex h-[250px] w-[380px] max-w-full absolute bg-opacity-90 z-40 rounded-xl justify-center items-center text-[2rem] font-semibold  text-white transition-all hover:bg-[#000] hover:bg-opacity-60"></div>
    </motion.a>
  );
}

export default ExperienceCard;
