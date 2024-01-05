/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../components/ui/button";

export default function About() {
  return (
    <motion.div
      className="flexjustify-start w-full  h-fit mx  text-start max-md:flex-col ">
      <motion.div 
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:0.75}} 
        className="flex flex-col w-full gap-5 xl:gap-8 max-w-4xl">

        <motion.h1 className="text-6xl xl:text-8xl  font-bold leading-[1.2]  tracking-tight">
          Hi. I'm Pedro Felippe 👋
        </motion.h1>

        
        <motion.span
          className="text-lg xl:text-xl font-regular w-full text-gray-700  tracking-tight max-w-2xl"
        >
          I've been coding simple, fast and easy to use web interfaces since 2018.
          I deal with cloud services, keeping everything connected, and making sure the databases work smoothly. 
        </motion.span>

        <motion.div className="flex gap-2 max-w-xl ">
          <Button variant='outline' className="py-7 text-lg font-medium hover:underline">
            <Link target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <FaLinkedin className="h-6 w-6"/>
            </Link>
          </Button>
          <Button variant='outline' className=" py-7 text-lg font-medium hover:underline">
            <Link target="_blank" href="https://github.com/pefelippe">
              <FaGithub className="h-6 w-6"/>
            </Link>
          </Button>
          <Button variant="secondary" className="w-fit px-16 py-7 text-xl font-semibold hover:underline">
            <Link target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
              Resume
            </Link>
          </Button>
        </motion.div>
        </motion.div>
    </motion.div>
  );
}
