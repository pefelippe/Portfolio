import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  const router = useRouter();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.75 }}
      className=" flex justify-between z-40  max-w-7xl mx-auto p-5 "
    >
      <div className="flex text-lg  font-extralight items-center gap-8 ">
        <Link
          className={
            router.pathname === "/"
              ? "text-[#fff] hover:text-[#5865f2]"
              : "text-gray-300 hover:text-[#5865f2] "
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={
            router.pathname === "/posts"
              ? "text-[#fff] hover:text-[#5865f2]"
              : "text-gray-300 hover:text-[#5865f2] "
          }
          href="/posts"
        >
          Posts
        </Link>
      </div>
      <div className="flex gap-8">
        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://read.cv/felippe_fernandes"
        >
          <FaFileAlt className=" h-7 w-7  hover:text-[#5865f2] " />
        </AnimatedBtn>
        <AnimatedBtn
          className="w-fit rounded-xl text-lg font-semibold"
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-7 w-7  hover:text-[#5865f2] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit rounded-xl  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-7 w-7  hover:text-[#5865f2] " />
        </AnimatedBtn>
      </div>
    </motion.header>
  );
}

export default Header;
