/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "../components/ui/button";

export default function About() {
  return (
    <motion.div
      className="flex md:items-center justify-start w-full  h-fit mx  text-start max-md:flex-col max-md:text-center">
      <motion.div 
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration:0.75}} 
        className="flex flex-col w-full gap-5 xl:gap-8 max-w-4xl">

        <motion.h1 className="text-5xl md:text-6xl xl:text-8xl  font-bold leading-[1.2]  tracking-tight">
          Hi. I am Pedro Felippe. 👋
        </motion.h1>

        
        <motion.span
          className="text-lg xl:text-2xl font-regular w-full text-gray-700 max-w-4xl tracking-tight"
        >
          I've been coding simple, fast and easy to use web interfaces since 2018.
          I deal with cloud services, keeping everything connected, and making sure the databases work smoothly. 
        </motion.span>

        <motion.div className="flex gap-5 max-w-md">
          <Button variant="outline" className="w-full py-7 text-lg font-semibold hover:underline">
            <Link target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
              Resume
            </Link>
          </Button>
   
        </motion.div>
        </motion.div>
    </motion.div>
  );
}
