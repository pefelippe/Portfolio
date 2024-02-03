/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern gap-8 "
    >
      <motion.div className="h-full flex flex-col items-center justify-center w-full z-20 gap-4  mx-auto max-w-5xl">
        <div
          className="flex rounded-md max-md:flex-col justify-center
         w-full items-center gap-20 min-h-fit  "
        >
          <div className="flex flex-col w-full text-lg gap-8 leading-normal items-start justify-center h-full ">
            <h3 className="section-subtitle">
              About <span className="text-blue">Me</span>
            </h3>
            <span className="">
              Working with Web development since 2017. Experience in creating
              simple, functional and easy-to-use interfaces. Specialized React,
              Next, Typescript and Node. Experience in agile methods, CI/CD
              tools and Cloud Providers as Azure and AWS. Verbal/written
              communication in advanced English.
            </span>
            <span>
              My first contact with development was still a child, when I tried
              to create my own version (a terrible one) of a famous browser game
              called Neopets, which sparked my curiosity about how the Web
              worked.
            </span>
            Today I'm here :)
          </div>

          <motion.img
            src="./assets/pedrof.jpg"
            className="rounded-xl border-2 max-md:max-h-[250px] w-[350px] 
            max-md:object-cover object-fit max-md:hidden min-h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
