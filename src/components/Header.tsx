import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import Icons from "../atoms/Icons";
import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="flex max-w-7xl justify-between z-40 mx-auto pt-8 gap-8 items-center px-8"
    >
      <div className="flex w-full mx-auto gap-8 ">
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold hover:text-[#5865f2]"
          target=""
          href="#sobre"
        >
          <p>Quem sou</p>
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold hover:text-[#5865f2]"
          href="#projetos"
          target=""
        >
          <p>Projetos</p>
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold hover:text-[#5865f2]"
          href="#contato"
          target=""
        >
          <p>Contato</p>
        </AnimatedBtn>
      </div>
      <Icons />
    </motion.header>
  );
}

export default Header;
