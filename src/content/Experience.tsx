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
      className="h-fit flex justify-center items-center flex-col relative overflow-hidden  text-left 
      max-w-full rounded-lg px-10 xl:px-40 mx-auto py-20 "
    >
      <h4 className="text-4xl font-semibold">
        E qual minha experiência profissional?
      </h4>
      <div className="w-full flex space-x-8 overflow-x-scroll p-8 snap-x snap-mandatory text-white">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default Experience;
