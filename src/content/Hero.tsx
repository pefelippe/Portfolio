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
      className=" content-intern relative w-full flex flex-col justify-center 
       items-start text-start my-auto gap-6 max-w-6xl mx-auto py-20 "
    >
      <motion.h1 className="text-6xl  lg:text-8xl uppercase font-extrabold text-blue  ">
        Hey. I'm Pedro Felippe.
      </motion.h1>

      <motion.h3 className="text-2xl font-thin  text-gray-700  max-w-2xl  dark:text-[#efefef]">
        A frontend developer based in Brazil dedicated to solve complex problems
        for companies using simple and well-executed solutions.
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
    </motion.div>
  );
}
