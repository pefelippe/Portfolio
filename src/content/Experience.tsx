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
      className="h-fit  flex items-center flex-col relative overflow-hidden  justify-evenly rounded-lg  lg:mx-20 px-8  py-20 "
    >
      <h4 className="text-4xl font-semibold ">
        <span className="underline bg-[#fff] text-[#000] p-2">
          Experiência Profissional
        </span>
      </h4>

      <div className="w-full flex space-x-3 overflow-x-scroll snap-x snap-mandatory text-white py-10 max-w-7xl">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
