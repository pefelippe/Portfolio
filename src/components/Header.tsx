import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  const router = useRouter();

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.75 }}
      className=" flex justify-between z-40  max-w-7xl mx-auto py-5 px-8"
    >
      <div className="flex text-lg  font-semibold items-center gap-8 max-md:gap-4 ">
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

        {/* <Link
          className={
            router.pathname === "/sobre"
              ? "text-[#fff] hover:text-[#5865f2]"
              : "text-gray-300 hover:text-[#5865f2] "
          }
          href="/sobre"
        >
          Sobre
        </Link> */}

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
      <div className="flex max-md:gap-4 gap-8 justify-center items-center">
        <AnimatedBtn
          className="w-fittext-lg font-semibold"
          href="https://github.com/pefelippe"
        >
          <FaGithub className=" h-6 w-6 hover:text-[#5865f2] " />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit  text-lg font-semibold"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className=" h-6 w-6 hover:text-[#5865f2] " />
        </AnimatedBtn>

        {/* <AnimatedBtn className="" href="https://read.cv/felippe_fernandes">
          <button className="w-[130px] flex items-center justify-center rounded-xl  text-lg font-semibold  px-6 py-3  bg-[#5865f2]">
            <p>Contato</p>
          </button>
        </AnimatedBtn> */}
      </div>
    </motion.header>
  );
}

export default Header;
