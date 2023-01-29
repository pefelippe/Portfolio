import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaLinkedinIn, FaGithub } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex justify-center xl:justify-end z-40  w-full mx-auto py-5 px-10"
    >
      <div className="flex justify-center items-center gap-8">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold"
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-7 w-7  hover:text-[#5865f2] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-7 w-7  hover:text-[#5865f2] " />
        </AnimatedBtn>


        <AnimatedBtn
          className="w-fit text-lg font-semibold bg-[#3f4de9] rounded-lg"
          href="https://resume.io/r/m2cn8pnqu"
        >
          <div className="flex gap-2  p-3 ">
            <FaFilePdf className="h-7 w-7 text-[#fff] " />
            <p>Currículo</p>
          </div>
        </AnimatedBtn>
      
      </div>
    </motion.header>
  );
}

export default Header;
