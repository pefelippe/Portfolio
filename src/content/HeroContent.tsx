/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center w-full  text-white text-start max-xl:px-6 py-12 mt-5 lg:py-24 lg:mt-10
    justify-center mx-auto   gap-6 max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col"
    >
      <div className="flex flex-col gap-4 lg:gap-6 ">
        <span className="text-7xl lg:text-8xl font-bold text-white max-lg:text-start ">
          I'm <span className="text-blue">Pedro Felippe</span>. Front-End
          Developer.
        </span>

        <h3 className="text-2xl font-normal text-[#888]  max-lg:text-start  ">
          Passion in creating simple yet visually appealing UIs.
        </h3>

        <div className=" items-start  justify-start gap-6  text-gray-100 flex  ">
          <AnimatedBtn
            className="rounded-full   font-semibold   "
            target="_blank"
            href="https://github.com/pefelippe"
          >
            <div className="flex flex-col items-center justify-center rounded-full gap-2 text-xl  hover:text-blue">
              <FaGithub className="headerSocial" />
            </div>
          </AnimatedBtn>

          <AnimatedBtn
            className="rounded-full  font-semibold"
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <div className="flex flex-col items-center justify-start   rounded-full gap-2 text-xl x  hover:text-blue">
              <FaLinkedin className="headerSocial" />
            </div>
          </AnimatedBtn>
        </div>
      </div>
    </motion.div>
  );
}
