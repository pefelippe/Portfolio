import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Avatar from "../public/38574428.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-md space-y-7 flex-shrink-0 w-[500px] snap-center bg-gray-800 p-10">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 rounded-full  items-center object-cover object-center m-auto"
          alt="ExperienceCard avatar"
          src={Avatar}
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h3 className="text-4xl font-light">CEO</h3>
        <p className="font-bold text-2xl mt-1">PLACEHOLDER</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="flex space">Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Sumarry Points</li>
          <li>Sumarry Points</li>
          <li>Sumarry Points</li>
          <li>Sumarry Points</li>
          <li>Sumarry Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
