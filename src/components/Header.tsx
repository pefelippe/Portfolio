import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import AnimatedBtn from "./motion/AnimatedBtn";
import Router from "next/router";

type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="min-h-[10vh]  h-fit flex z-40  mx-auto  text-[20px] text-[#fff] 
       font-semibold  justify-between  w-full items-center max-xl:px-6 max-w-7xl"
    >
      <div className="flex gap-8 text-white">
        <AnimatedBtn>
          <Link
            className={
              Router.pathname === "/"
                ? " underline decoration-2 decoration-[#5865f2] underline-offset-8"
                : "text-gray-300"
            }
            href="/"
            target=""
          >
            <span>Home</span>
          </Link>
        </AnimatedBtn>
        <AnimatedBtn>
          <Link
            className={
              Router.pathname === "/Projects"
                ? " underline decoration-2 decoration-[#5865f2] underline-offset-8"
                : "text-gray-300"
            }
            href="/Projects"
            target=""
          >
            <span>Projetos</span>
          </Link>
        </AnimatedBtn>
        <AnimatedBtn>
          <Link
            className={
              Router.pathname === "/Contact"
                ? " text-[#fff] underline decoration-2 decoration-[#5865f2] underline-offset-8"
                : "text-gray-300"
            }
            href="/Contact"
            target=""
          >
            <span> Contato </span>
          </Link>
        </AnimatedBtn>
      </div>

      <div className="flex gap-6">
        <AnimatedBtn className="w-fit" href="https://github.com/pefelippe">
          <FaGithub className="h-7 w-7  text-[#fff]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <FaLinkedinIn className="h-7 w-7 text-[#fff]" />
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit text-[#fff]"
          href="https://resume.io/r/m2cn8pnqu"
        >
          <FaFilePdf className="h-7 w-7  " />
        </AnimatedBtn>
      </div>
    </motion.div>
  );
}

export default Header;
