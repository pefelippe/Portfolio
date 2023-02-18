import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf, FaLinkedinIn, FaAngleDoubleRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import AnimatedBtn from "../components/motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" top-0 right-0 left-0 h-fit flex z-40  mx-auto max-w-screen-2xl text-[20px] text-[#EFEFEF]
       font-semibold justify-between w-full items-center  py-4 px-8"
    >
      <Link className="headerContent" href="/">
        <p className="text-3xl">Pedro Felippe </p>
      </Link>

      <Link
        href="/Contact"
        className=" items-center justify-center flex gap-2 p-3 px-4
          border-2 w-fit text-sm md:text-xl mx auto rounded-xl font-semibold text-[#fff]
          transition-all border-[#5865f2] hover:bg-[#5865f2] hover:gap-1"
      >
        <FaAngleDoubleRight className="h-7 w-7" />
        <p>Entre em contato</p>
      </Link>
    </motion.div>
  );
}

export default Header;
