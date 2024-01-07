/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col justify-start w-full  h-fit mx  text-start max-md:flex-col gap-4 max-w-3xl md:gap-10">

      <motion.div 
        className="flex flex-col w-full gap-6   justify-center">
        <motion.h1         
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}  
          className="text-5xl md:text-8xl text-start font-bold  tracking-tight">
          Hi. I'm Pedro Felippe 👋
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:0.5}}  
          className="text-2xl text-gray-500 text-start font-medium tracking-[1px]">
          Full-Stack Developer
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay:1}}  
          className="flex gap-4 items-center">
            <AnimatedBtn target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <FaLinkedin className="h-9 w-9 hover:text-blue"/>
            </AnimatedBtn>

            <AnimatedBtn  href="https://github.com/pefelippe">
              <FaGithub className="h-9 w-9 hover:text-blue"/>
            </AnimatedBtn>

            <AnimatedBtn target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
              <Button variant="secondary" className="w-fit px-16 py-7 font-semibold hover:underline border text-lg xl:text-xl ">
                <p>Resume</p>
              </Button>
            </AnimatedBtn>
        </motion.div>
        
        {/* <motion.span
          className="text-lg  font-regular w-full text-gray-700  tracking-tight "
        >
          I've been coding simple, fast and easy to use web interfaces since 2018.
          I deal with cloud services, keeping everything connected, and making sure the databases work smoothly. 
        </motion.span>

        <motion.div className="flex gap-3 max-w-xl ">
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
          <Button variant="secondary" className="w-fit px-16 py-7 text-xl font-semibold hover:underline border text-lg xl:text-xl ">
            <Link target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
              Resume
            </Link>
          </Button>
        </motion.div> */}
      </motion.div>

  

    </motion.div>
  );
}
