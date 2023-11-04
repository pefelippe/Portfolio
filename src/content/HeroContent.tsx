/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center w-full  text-white text-center max-xl:px-6 lg:py-16 lg:pb-40
    justify-center mx-auto   gap-6 max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col"
    >
      <div className="flex flex-col gap-4 lg:gap-6 ">
        <span className="text-7xl lg:text-8xl font-bold text-white max-lg:text-start ">
          I'm <span className="text-blue">Pedro Felippe</span>. Front-End
          Developer.
        </span>

        <h3 className="text-2xl font-normal text-[#888]  max-lg:text-start  ">
          Passion in creating simple yet visually appealing UIs.
        </h3>
      </div>
    </motion.div>
  );
}
