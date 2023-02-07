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
      
      className="flex  justify-center xl:justify-end z-40 mx-auto w-full pt-8 px-20 items-center gap-8"
    >
      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        target=""
        href="#sobre"
      >
        <p>Quem sou</p>
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="#projetos"
        target=""
      >
        <p>Projetos</p>
      </AnimatedBtn>

      <AnimatedBtn
        className="w-fit rounded-xl  text-lg font-semibold"
        href="#contato"
        target=""
      >
        <p>Contato</p>
      </AnimatedBtn>
    </motion.header>
  );
}

export default Header;
