import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      id="about-content"
      className="content-intern justify-center text-center items-center lg:flex-row "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col gap-4 justify-start h-full my-auto items-center  max-sm:max-w-md text-center
        dark:text-white leading-relaxed "
      >
        <motion.img
          src="./assets/avatar-pdr.png"
          className="w-32 rounded-full"
        />
        <p className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tighter leading-[1.3] dark:text-white">
          Hello there, I'm <span className="text-blue">Pedro Felippe</span>!
        </p>

        <span className="text-lg lg:text-xl dark:text-gray-300  text-[#444] max-w-2xl leading-relaxed text-center">
          I’m a software engineer based in Brazil, creating better products,
          systems and services for people around the world.
        </span>

        <motion.div
          className="flex  h-full justify-center  rounded-t-xl 
            items-center w-fit  space-x-5 lg:justify-between "
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
