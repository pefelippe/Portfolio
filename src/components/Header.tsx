import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimatedBtn from "./motion/AnimatedBtn";
import { FaGithub, FaLinkedinIn, FaFilePdf } from "react-icons/fa";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="flex  justify-center xl:justify-end z-40 mx-auto w-full pt-8 px-10 items-center"
    >
      <div className="flex gap-12">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  "
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-8 w-8  hover:text-[#5865f2] text-[#fff] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaFilePdf className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
        </AnimatedBtn>
      </div>
    </motion.header>
  );
}

export default Header;
