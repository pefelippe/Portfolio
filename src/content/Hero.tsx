/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      className="flex justify-start w-full  h-fit mx  text-center max-md:flex-col gap-4 md:gap-10 ">
      <motion.img src="/assets/avatar-pdr.png" alt="pedro felippe"   className="border rounded-xl max-md:rounded-full max-md:h-28 max-md:w-28 md:w-[300px]"/>

      <motion.div className="flex flex-col w-full gap-2   justify-center">
        <motion.h1         
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}} 
          className="text-5xl md:text-8xl text-start font-bold  tracking-tight">
          Hi. I'm Pedro Felippe.👋
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.5}}  
          className="text-3xl text-gray-500 text-start font-medium tracking-[1px] pb-2">
          Full-Stack Developer 
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:1}}  
          className="flex gap-6 items-center">
            <AnimatedBtn target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <FaLinkedin className="h-10 w-10 hover:text-blue"/>
            </AnimatedBtn>

            <AnimatedBtn  href="https://github.com/pefelippe">
              <FaGithub className="h-10 w-10 hover:text-blue"/>
            </AnimatedBtn>
        </motion.div>
      </motion.div>

    </motion.div>
  );
}
