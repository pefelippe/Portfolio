/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="flex  text-start items-startw-full justify-start py-20  ">
      <p className="text-[3.5rem]  md:text-[6rem] xl:text-[12rem] text-white leading-[1.2] font-medium  ">
        front end developer + ui designer
      </p>
    </motion.div>
  );
}
