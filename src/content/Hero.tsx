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
      className="content-intern flex-row items-center"
    >
      <motion.div className="flex flex-col  items-start w-full  gap-4">
        <h3 className=" text-3xl">
          Hi, I'm <b className="  text-blue">Pedro Felippe</b>👋
        </h3>
        <motion.h1 className="text-7xl lg:text-8xl font-extrabold ">
          Front-End React Developer
        </motion.h1>

        <motion.h3 className="text-xl font-light  max-w-lg text-[#999]  py-2">
          Since 2020, solving complex industry problems and creating simple yet
          powerful solutions.
        </motion.h3>

        <motion.div
          className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-8 w-8" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-8 w-8" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>

      <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className=" object-cover max-lg:hidden lg:max-w-[350px] w-full border-2 rounded-full border-[#101010]"
      />
    </motion.div>
  );
}
