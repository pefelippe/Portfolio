import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

function Socials({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 75 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="mx-auto relative h-fit text-xl w-full justify-center lg:justify-end text-gray flex items-center  gap-6"
    >
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div className=" flex gap-2 items-center w-full font-semibold transition-all hover:text-blue">
          <FaGithub className="h-8 w-8" />
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
          <FaLinkedinIn className="h-8 w-8" />
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
          <FaFilePdf className="h-8 w-8" />
        </div>
      </AnimatedBtn>
    </motion.div>
  );
}

export default Socials;
