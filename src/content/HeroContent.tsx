/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div className="flex flex-col text-start items-start w-full justify-start gap-2">
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="h-24 w-24  rounded-full "
      />
      <p className="text-[3rem] md:text-[5rem] text-white leading-[1.2] font-medium  ">
        full stack developer + ui designer
      </p>
    </motion.div>
  );
}
