import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

function Socials({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-fit mx-auto text-xl w-full  
      flex flex-col justify-start  items-start  text-start gap-10"
    >
      <div className="flex  gap-8">
        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-2 items-center w-full font-semibold transition-all hover:text-blue">
            <FaGithub className="h-7 w-7" />
            Github
          </div>
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-2 items-center 
            font-semibold transition-all  hover:text-blue"
          >
            <FaLinkedinIn className="h-7 w-7 " />
            Linkedin
          </div>
        </AnimatedBtn>
        <AnimatedBtn
          className=""
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        >
          <div
            className="  flex gap-2 items-center 
          font-semibold transition-all  hover:text-blue"
          >
            <FaFilePdf className="h-7 w-7" /> Resume
          </div>
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}

export default Socials;
