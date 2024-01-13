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
      className="content-intern lg:items-center w-full text-start flex-row-reverse max-lg:flex-col-reverse"
    >
      <motion.div className="flex flex-col items-start gap-6 w-full max-w-3xl">
        <h3 className="text-2xl lg:text-3xl  font-thin">
          Hi, I'm <span className="font-medium">Pedro Felippe</span> 👋
        </h3>

        <motion.h1 className="text-6xl lg:text-7xl  font-extrabold text-blue dark:text-[#fffdd0]">
          I lead, project and code enterprise solutions.
        </motion.h1>

        <motion.h3 className="text-xl lg:text-2xl  font-thin max-w-2xl text-gray-700   dark:text-[#efefef]">
          Solving complex problems with powerful simple solutions.
        </motion.h3>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
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

      <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className="flex-shrink-1 object-cover relative w-full max-lg:hidden   lg:max-w-[390px] rounded-xl  "
      />
    </motion.div>
  );
}
