/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Image from "next/image";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

function AboutContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5}}   
      className="flex justify-center w-full mx-auto gap-6 items-start relative  flex-col ">

        <motion.h1
          initial={{ y: 75 }}
          animate={{  y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[40px] xl:text-5xl max-w-3xl font-bold tracking-tighter font-mono"
        >
          Who am i.
        </motion.h1>

        <motion.div className="flex justify-start w-full  h-fit mx  text-start max-md:flex-col gap-4 md:gap-10">
          <Image src="/assets/pedrof.jpg" alt="pedro felippe" width={350} height={350} className="flex-shrink-0 object-cover border rounded-md 
          max-md:w-full max-md:max-h-[300px]"/>
          <motion.div className="flex flex-col items-center justify-center w-full">
            <motion.h3
              initial={{ y: 75, opacity: 0 }}
              animate={{  y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }} 
              className="font-thin text-xl  leading-normal tracking-tighter "
              >
              I'm a Full Stack Developer based in Brazil who's been building industry utilized applications 
              since 2018.<br/><br/> Since then, I've worked in companies and taken on freelance projects and consulting for clients.<br/><br/> 
              My focus is on finding the best ways to enhance user experience and create reusable, scalable, and testable interfaces.<br/><br/>
            </motion.h3>
            <AnimatedBtn target="_blank" href="https://drive.google.com/file/d/1V5sxQbNz1tgaO3exTl3aTvql7l8qxl2r/view?usp=sharing">
                <Button variant="outline" className="w-full px-20 py-7 font-semibold hover:underline border text-lg xl:text-xl ">
                  <p>Resume</p>
                </Button>
              </AnimatedBtn>
          </motion.div>
        </motion.div>
 
    </motion.div>
  );
}

export default AboutContent;
