import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "../animated/AnimatedBtn";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="h-[10vh] justify-center font-thin text-sm md:text-md text-gray-850 mx-auto   flex px-8 p-10  max-w-xl  w-full">
      <p className="flex">Pedro Felippe © {year}</p>
    </motion.footer>
  );
}

export default Footer;
