import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Logo } from "../components/layout/Header";
import { Skills } from "../components/Skills";

export default function About() {
  const skillList = [
    "react",
    "tailwind",
    "next",
    "typescript",
    "node",
    "angular",
    "AWS",
    "AZURE",
    "golang",
    "docker",
    "python",
    "shadcn",
    "selenium",
  ];
  return (
    <motion.div
      id="about-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col gap-4 items-center px-10 justify-center h-full "
    >
      <div className="w-full fixed left-0 top-0 right-0 p-6">
        <Logo />
      </div>
      <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className="flex-shrink-1 object-cover relative h-full max-h-[180px] rounded-full "
      />
      <div className="flex lex-col lg:gap-8 items-center text-center  justify-center">
        <div className="flex gap-8 flex-col w-full  ">
          <h3 className="section-subtitle text-[#f5efdf]  lg:text-6xl  mx-auto">
            A frontend developer based in Brazil.
          </h3>
          <p className="text-lg max-w-md lg:text-xl font-normal leading-relaxed mx-auto">
            Dedicated to solve complex problems for companies using simple and
            well-executed solutions.
          </p>
          {/* <Skills technologies={skillList} /> */}
          <div className="flex items-center gap-10 justify-center ">
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-9 w-9 " />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-9 w-9 " />
            </AnimatedBtn>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
