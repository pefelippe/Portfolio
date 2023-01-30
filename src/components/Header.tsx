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
      className="flex justify-end z-40  w-full mx-auto py-4 px-10  items-center"
    >
        <div className="flex w-full justify-center md:justify-end items-center gap-4 ">
            <AnimatedBtn
              className="w-fit rounded-xl text-lg font-semibold  flex  py-3 px-4 border-[#3f4de9] border-2 hover:bg-[#3f4de9]"
              href="https://github.com/pefelippe"
            >
              <FaGithub className=" h-7 w-7 " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit rounded-xl text-lg font-semibold  py-3 px-4 border-[#3f4de9] border-2 hover:bg-[#3f4de9]  "
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedinIn className=" h-7 w-7 " />
            </AnimatedBtn>

            <AnimatedBtn
              className="w-fit text-lg font-semibold border-2 border-[#3f4de9] rounded-xl py-3 px-4 hover:bg-[#3f4de9]"
              href="https://resume.io/r/m2cn8pnqu"
            >
              <FaFilePdf className="h-7 w-7 text-[#fff] " />
            </AnimatedBtn>
          </div>   
    </motion.header>
  );
}

export default Header;
