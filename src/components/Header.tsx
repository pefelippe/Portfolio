import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="flex max-w-7xl justify-between z-40 mx-auto w-full pt-8 max-lg:px-6 items-center"
    >
      <Link href="/">
        <span className="font-bold text-2xl cursor-pointer transition-all hover:text-gray-300">
          pedrofelippe_
        </span>
      </Link>

      <div className="flex gap-8 max-lg:justify-center pt-4">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  "
          href="https://github.com/pefelippe"
        >
          <FaGithub className="h-8 w-8  hover:text-[#5865f2] text-[#fff] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-8 w-8  hover:text-[#5865f2] text-[#fff]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  "
          href="https://resume.io/r/m2cn8pnqu"
        >
          <FaFilePdf className="h-8 w-8 hover:text-[#5865f2]  text-[#fff] " />
        </AnimatedBtn>
      </div>
    </motion.header>
  );
}

export default Header;
