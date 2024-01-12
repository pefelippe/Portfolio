/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="flex relative w-full max-md:flex-col tracking-normal   mx-auto
      justify-center items-center text-start  md:gap-10 max-w-7xl"
    >
      <motion.div className="flex flex-col  items-start w-full">
        <motion.h1 className="text-6xl lg:text-8xl font-bold max-w-2xl ">
          Hey, I’m Pedro Felippe.
        </motion.h1>

        <motion.h3 className="text-xl md:text-3xl font-thin font-sans  max-w-xl text-[#999]  py-8">
          Web Developer who loves to create amazing products and solve problems.
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

      <div></div>
    </motion.div>
  );
}
