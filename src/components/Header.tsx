import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" top-0 py-4 w-screen z-40 snap-center justify-start bg-[#151515]  text-[#FFFFFFDE] px-8">
      <motion.nav
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mx-auto flex items-center justify-between max-w-7xl  "
      >
        <Link href="#hero">
          <span className="logoBtn">
            <p className="animate-pulse">_</p>pedrofelippe
          </span>
        </Link>

        <nav className="flex justify-center items-center gap-5 ">
          <a href="#">
            <FaGithub className="socialMediaIcon" />
          </a>
          <a href="#">
            <FaLinkedinIn className="socialMediaIcon" />
          </a>
        </nav>
      </motion.nav>
    </header>
  );
}
