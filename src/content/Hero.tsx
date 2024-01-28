/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="content-intern relative w-full md:flex-row-reverse justify-center 
       items-start text-start my-auto md:gap-10 max-w-6xl mx-auto md:py-20 "
    >
      <motion.img
        src="./assets/avatar-pdr.png"
        className="rounded-full border-8 shadow max-w-[150px] md:max-w-sm"
      />
      <div className="flex gap-6 flex-col w-full justify-center h-full">
        <motion.h1 className="text-5xl lg:text-[80px] uppercase font-extrabold text-blue  max-w-3xl ">
          Pedro Felippe
        </motion.h1>

        <motion.h3 className="text-xl md:text-2xl font-thin  text-gray-700  max-w-2xl  dark:text-[#efefef]">
          A frontend developer based in Brazil dedicated to solve complex
          problems for companies using simple and well-executed solutions.
        </motion.h3>

        <div className="flex items-center gap-6 justify-start ">
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-9 w-9 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
          </AnimatedBtn>
        </div>
      </div>
    </motion.div>
  );
}
