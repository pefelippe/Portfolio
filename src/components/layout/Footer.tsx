import { motion } from "framer-motion";
import React from "react";

import AnimatedBtn from "../animated/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="absolute bottom-0 p-8 w-screen font-light  text-[#fff] leading-relaxed  flex  mx-auto  
    justify-center lg:justify-start text-lg px-8"
    >
      <div className="w-full   mx-auto flex justify-between ">
        <AnimatedBtn className="" href="https://github.com/pefelippe">
          <div className=" flex gap-2 items-center w-full transition-all hover:text-blue">
            Github
          </div>
        </AnimatedBtn>

        <AnimatedBtn
          className=""
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <div
            className="  flex gap-2 items-center 
             transition-all  hover:text-blue"
          >
            Linkedin
          </div>
        </AnimatedBtn>
      </div>
    </motion.footer>
  );
}

export default Footer;
