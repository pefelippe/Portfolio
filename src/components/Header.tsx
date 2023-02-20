import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" top-0 right-0 left-0 h-fit flex z-40  mx-auto max-w-7xl  text-[20px] text-[#EFEFEF]
       font-semibold justify-between w-full items-center pt-8 max-xl:px-6"
    >
      <Link className="headerContent" href="/">
        <p className="text-2xl md:text-3xl">Pedro Felippe </p>
      </Link>

      <div className=" flex gap-4 ">
        <AnimatedBtn className="iconHeader" href="https://github.com/pefelippe">
          <FaGithub className="h-8 w-8 " />
        </AnimatedBtn>

        <AnimatedBtn
          className="iconHeader"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className="h-8 w-8 " />
        </AnimatedBtn>

        <AnimatedBtn
          className="iconHeader"
          href="https://resume.io/r/m2cn8pnqu"
        >
          <FaFilePdf className="h-8 w-8 " />
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}

export default Header;
