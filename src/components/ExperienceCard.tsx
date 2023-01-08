import { motion } from "framer-motion";
import React from "react";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-xl items-center space-y-7 flex-shrink-0  max-w-7xl  w-[420px] 
      snap-center bg-[#292929] p-10 hover:opacity-95 opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full  object-cover object-center"
        src="https://pbs.twimg.com/profile_images/1413230067862355973/cAOV9v6P_400x400.jpg"
        alt="card image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-End Dev</h4>
        <p className="font-bold text-2xl mt-1">Instituto Atlântico</p>
        <div className="flex space-x-2 my-2"></div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... Endend:...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
