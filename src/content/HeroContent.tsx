/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col  items-center mx-auto  w-full
    text-center leading-none  justify-center 
"
    >
      <div className=" flex flex-col text-center items-center ">
        <p className="text-[1.4rem]   text-gray-100 tracking-[5px] md:tracking-[10px] font-normal mb-4 ">
          FULL-STACK DEVELOPER
        </p>
        <p
          className="text-[3rem] md:text-[4rem] text-gray-900
         font-bold mb-4"
        >
          Pedro Felippe
        </p>
        <p className="max-w-lg  text-[1.3rem]  text-gray-100  font-normal  leading-[1.2]">
          I am developer where passion lies in creating simple yet visually
          appealing interfaces.
        </p>
        
      </div>
    </motion.div>
  );
}
