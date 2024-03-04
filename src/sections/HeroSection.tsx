import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <motion.div className="flex max-md:flex-col items-center text-center justify-center h-full  tracking-wide gap-10 w-ful max-w-5xl mx-auto ">
      <div className="flex font-normal flex-col text-base tracking-wide text-center gap-4 ">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold tracking-tighter
           text-blue dark:text-yellow-300"
        >
          Hey, I am Pedro Felippe. Software Engineer, UI/UX Designer & Coffee
          Lover.
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-2xl  font-normal max-w-3xl mx-auto
          text-[#000] dark:text-gray-200 pt-2"
        >
          Dedicated to craft top-tier web solutions with a focus on simplicity
          and excellence since 2020.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex gap-5 mx-auto  font-normal text-lg   "
        >

        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
