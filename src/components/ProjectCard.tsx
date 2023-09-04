import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type IProjectCard = {
  description: string;
  imgUrl: string;
  link: string;
  repo: string;
  title: string;
  stack: string[];
  id: number;
};

function ProjectCard({
  description,
  link,
  imgUrl,
  repo,
  title,
  stack,
  id,
}: IProjectCard) {
  return (
    <motion.div transition={{ duration: 1 }}>
      <Link
        className="flex flex-col mx-auto  w-full  justify-start  min-h-fit 
       items-center text-start  bg-[#fafafa] hover:shadow-md rounded-xl p-4"
        href={link}
      >
        <motion.img
          src={imgUrl}
          alt="card image"
          className="flex-shrink-0 object-cover  transition-allflex h-[250px] w-full rounded-md"
        />

        <div className="w-full flex flex-col  text-center items-center  justify-center leading-normal  pt-4 ">
          <p className=" gap-2 w-fit text-2xl  font-semibold hover:text-gray-300 transition-all">
            {title}
          </p>
          <p className="w-fit text-lg text-gray-300 ">{description}</p>

          {/* <div
          className="flex  w-full  justify-center 
        font-semibold text-xl items-center gap-6 mt-5 "
        >
          <Link
            href={repo}
            target="_blank"
            className="flex bg-[#fff] text-[#000] items-center
             hover:bg-[#fff]/80 transition-all border-2 
             justify-center rounded-md w-full p-3 text-2xl gap-4"
          >
            <p>Code</p>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-blue hover:bg-blue/80
             text-white transition-all 
            justify-center rounded-md w-full p-3 text-2xl"
          >
            Demo
          </Link>
        </div> */}
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
