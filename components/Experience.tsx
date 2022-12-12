import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./atoms/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full justify-evenly rounded-lg px-10 xl:px-32 mx-auto items-center"
    >
      <h1 className="absolute top-32 uppercase tracking-[20px] text-gray-300 text-2xl">
        Experiência
      </h1>

      <div className="w-full flex space-x-8 overflow-x-scroll p-8 snap-x snap-mandatory text-white mt-40 ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
