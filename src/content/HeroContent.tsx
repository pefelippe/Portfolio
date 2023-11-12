/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="flex flex-col items-start w-full  text-white text-start max-xl:px-6
    justify-start  gap-6  max-lg:flex-col"
    >
      <div className="flex flex-col gap-4 lg:gap-6 max-w-3xl ">
        <span className="text-7xl  font-bold text-white  ">
          Web Developer. <br />
          DevOps Enthusiast. <br />
          Content Creator.
        </span>

        <h3 className="text-xl font-normal text-[#888]   ">
          Passion in creating simple yet visually appealing UIs.
        </h3>
      </div>
    </motion.div>
  );
}
