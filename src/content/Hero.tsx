/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="content-intern items-start md:items-center w-full text-start md:text-center"
    >
      <motion.div className="flex flex-col items-start md:items-center gap-4 w-full">
        <h3 className="text-xl sm:text-3xl  font-thin">
          Hi, I'm Pedro Felippe 👋
        </h3>
        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl  font-extrabold text-blue dark:text-[#fffdd0]">
          I project, code and grow internet software.
        </motion.h1>

        <motion.h3 className="text-lg sm:text-2xl font-thin max-w-2xl text-gray-700   dark:text-[#efefef]">
          Solving complex industry problems and creating simple yet powerful
          solutions.
        </motion.h3>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-8 max-w-sm"
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
