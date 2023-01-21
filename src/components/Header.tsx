import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex py-5  max-w-7xl mx-auto  text-md justify-between max-lg:px-5 font-extralight"
    >
      <div className="flex items-center justify-center gap-4 sm:gap-8 text-gray-300 ">
        <Link className="hover:text-[#5865f2]" href="/">
          Home
        </Link>
        <Link className="hover:text-[#5865f2]" href="/projects">
          Projetos
        </Link>
        <Link className="hover:text-[#5865f2]" href="/posts">
          Posts
        </Link>
      </div>
      <AnimatedBtn
        className=""
        href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view"
      >
        <button className="rounded-full p-3 px-7 bg-[#fff] font-semibold text-[#000] hover:underline hover:bg-[#5865f2] transition-all ease-in-out">
          Currículo
        </button>
      </AnimatedBtn>
    </motion.header>
  );
}

export default Header;
