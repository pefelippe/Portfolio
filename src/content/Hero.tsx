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
      <motion.div className="h-full flex flex-col items-start justify-center w-full z-20 gap-4  mx-auto ">
        <div
          className="flex rounded-md max-md:flex-col justify-center max-w-3xl
         w-full items-center gap-10 min-h-fit  "
        >
          <div className="flex flex-col w-full text-lg gap-4 leading-normal items-start justify-start h-full ">
            <p className="text-6xl lg:text-7xl tracking-tight font-extrabold ">
              Hi, I am <span className="text-blue">Pedro Felippe</span> —
              Frontend Developer based in Brazil.
            </p>
            {/* <span className="text-base tracking-tight max-w-4xl leading-normal">
              I have 3+ years of experience in real projects, focused on
              Frontend development with a focus on React, Next and Typescript. I
              accumulated practical experience with microfrontends, performance
              monitoring, automated testing, server-side rendering (SSR), search
              engine optimization (SEO) and integration with cloud services such
              as Azure and AWS (Lambda, DynamoDB, S3).
            </span> */}
          </div>

          {/* <motion.img
            src="./assets/pedrof.jpg"
            className=" border-2 max-w-[300px] rounded-3xl
            max-md:object-cover object-fit max-md:hidden "
          /> */}
        </div>
      </motion.div>
    </motion.div>
  );
}
