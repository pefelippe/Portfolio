import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

type Props = {};

function Socials({}: Props) {
  return (
    <motion.div className="h-fit  flex  gap-12 items-center">
      <AnimatedBtn
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit"
        className="w-fit  flex gap-2 items-center px-10 py-4 rounded bg-blue shadow
        font-semibold transition-all  text-white  text-xl hover:underline"
      >
        <p className=" ">View resume</p>
      </AnimatedBtn>
      <AnimatedBtn className="" href="https://github.com/pefelippe">
        <div className=" flex gap-2 items-center w-full font-semibold transition-all hover:text-blue">
          <FaGithub className="h-10 w-10" />
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
          <FaLinkedinIn className="h-10 w-10" />
        </div>
      </AnimatedBtn>
    </motion.div>
  );
}

export default Socials;
