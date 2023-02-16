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
      className="flex h-fit min-w-[350px] w-full md:w-[450px] flex-col justify-between mx-auto rounded-2xl transition-all  p-2 
     bg-[#fff] shadow-xl  hover:bg-[#5865f2]/20 "
      href=""
    >
      <motion.img
        src={imgUrl}
        alt="card image"
        className="object-cover md h-[250px] w-full rounded-md"
      />

      <motion.div className="flex flex-col  items-center justify-center w-full  py-5">
        <p className="items-center text-[1.6rem]   font-semibold  text-gray-200 underline decoration-[#5865f2] ">
          {title}
        </p>
        <p className="items-center text-[1.2rem]  text-gray-200  ">
          {description}
        </p>
      </motion.div>
    </motion.a>
  );
}

export default ExperienceCard;
