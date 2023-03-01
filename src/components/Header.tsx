import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="absolute w-screen top-0 h-fit flex z-40  mx-auto 
       font-semibold  justify-between items-center p-4"
    >
      <AnimatedBtn className=" " href="https://github.com/pefelippe">
        <FaGithub className="h-10 w-10 text-white hover:text-[#5865f2]" />
      </AnimatedBtn>
      {/* 
      <AnimatedBtn
        className=""
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedinIn className="h-10 w-10 text-white hover:text-[#5865f2] " />
      </AnimatedBtn> */}
    </motion.div>
  );
}

export default Header;
