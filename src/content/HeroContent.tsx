/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-start w-full  text-white text-start max-xl:px-6
    justify-start    mx-auto max-w-5xl  gap-6 "
    >
      {/* <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className=" h-[100px]   rounded-full"
      /> */}

      <div className="flex flex-col gap-4 lg:gap-6 max-w-3xl">
        <span className="text-4xl lg:text-6xl font-bold text-white">
          Hey. I'm <span className="text-blue">Pedro Felippe</span> - Front-end
          Developer
        </span>

        <h3 className="text-lg font-medium text-[#888]  ">
          Passion in creating simple yet visually appealing UIs.
        </h3>
      </div>
      {/* <Links /> */}
    </motion.div>
  );
}
