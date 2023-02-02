import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex justify-end z-40  w-full mx-auto py-2 px-10  items-center"
    >
      <div className="flex w-full justify-center lg:justify-end  items-center gap-8 ">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  flex  py-3 "
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-7 w-7 hover:text-[#3f4de9]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold py-3  "
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-7 w-7 hover:text-[#3f4de9]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold  py-3     "
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaFilePdf className=" h-7 w-7 hover:text-[#3f4de9]" />
        </AnimatedBtn>
      </div>
    </motion.header>
  );
}

export default Header;
