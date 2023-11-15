/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="flex  w-full  text-white text-center 
    justify-center items-center  gap-3  flex-col"
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="w-16 h-16 lg:w-24 lg:h-24  object-fit rounded-full"
      />
      <div className="flex flex-col gap-2 max-w-3xl ">
        <span className="text-3xl md:text-4xl  font-medium text-white leading-[1.2] ">
          Pedro Felippe <br />
        </span>
        <h3 className="text-xl font-normal text-[#888]  max-w-sm ">
          Passion in creating simple yet visually appealing UIs.
        </h3>
        <Links />
      </div>
    </motion.div>
  );
}
