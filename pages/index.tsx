/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "../src/components/animated/AnimatedBtn";
import About from "../src/content/About";
import Resume from "../src/content/Resume";
import Skills from "../src/content/Skills";
import Contact from "./contact";
import Projects from "./projects";

export default function Home() {
  return (
    <motion.div className=" flex flex-col text-center">
      <About />

      {/* <motion.div className="fixed left-5 bottom-5 flex flex-col items-center gap-6  text-[#000] max-md:hidden">
        <AnimatedBtn
          className=""
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          <div className=" flex gap-2 items-center w-full font-semibold transition-all hover:text-blue rounded-full p-3 bg-[#fff]">
            <FaFilePdf className="h-6 w-6" />
          </div>
        </AnimatedBtn>

        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-2 items-center w-full font-semibold transition-all hover:text-blue rounded-full p-3 bg-[#fff]">
            <FaGithub className="h-6 w-6" />
          </div>
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-2 items-center 
            font-semibold transition-all  hover:text-blue rounded-full p-3 bg-[#fff]"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </div>
        </AnimatedBtn>
      </motion.div> */}
    </motion.div>
  );
}
