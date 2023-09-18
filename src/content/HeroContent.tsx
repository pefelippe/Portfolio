/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Links from "../components/Links";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col  items-center mx-auto  w-full
    text-start leading-none  justify-center min-h-[50vh] "
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="object-fit items-center max-w-[140px] mt-20 
        flex-shrink-1 object-cover transition-all flex  rounded-full "
      />
      <div className="py-4 flex flex-col text-center items-center gap-2">
        <p
          className="text-[4rem] md:text-[5rem]
         font-bold text-blue"
        >
          Pedro Felippe
        </p>
        <p className="  text-[1.4rem] md:text-[1.6rem]  text-gray-100 tracking-[5px] md:tracking-[10px] font-normal py-4 ">
          FULL-STACK DEVELOPER
        </p>
      </div>

      <Links />
    </motion.div>
  );
}
