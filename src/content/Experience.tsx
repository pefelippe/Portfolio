import { motion } from "framer-motion";
import React from "react";

import ExperienceCard from "../components/ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-max  flex items-center flex-col relative overflow-hidden  justify-center rounded-lg  lg:mx-20 px-8 "
    >
      <h4 className="mt-2 w-full text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl">
        <span className="">Experiência Profissional</span>
      </h4>

      <div className="w-full max-w-7xl flex space-x-4 overflow-x-scroll snap-x snap-mandatory text-white pt-10 ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
