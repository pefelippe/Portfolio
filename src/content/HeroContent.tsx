/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="flex  text-start items-startw-full justify-start pt-10 ">
      <p className="text-[3.5rem]  md:text-[6rem] xl:text-[12rem] text-white leading-[1.2] font-medium  ">
        full stack developer + ui designer
      </p>
    </motion.div>
  );
}
