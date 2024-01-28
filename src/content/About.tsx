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
      id="about-content"
      className="content-intern gap-8 "
    >
      <motion.div className="h-full flex flex-col items-center justify-center w-full z-20 gap-8">
        <div
          className="flex rounded-md max-md:flex-col
         w-full items-start min-h-fit gap-8 md:gap-12 max-w-5xl"
        >
          <motion.img
            src="./assets/pedrof.jpg"
            className="rounded-3xl border max-md:max-h-[300px] w-[400px] max-md:object-cover object-fit max-md:hidden"
          />
          <div className="flex flex-col w-full text-xl gap-8 leading-normal items-start justify-center h-full max-w-2xl">
            <h3 className="section-subtitle   max-w-6xl ">
              About <span className="text-blue">Me</span>
            </h3>
            <span className="">
              Working with Web development for over 5 years. Experience in
              creating simple, functional and easy-to-use interfaces.
              Specialized in the Javascript ecosystem, mainly in React and Node.
              Experience in agile methods and CI/CD tools such as Azure and AWS.
              Verbal/written communication in advanced English.
            </span>

            <span>
              My first contact with development was still a child, when I tried
              to create my own version (albeit a terrible one) of a famous
              browser game called Neopets, which sparked my curiosity about how
              the Web worked. Today I'm here :)
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
