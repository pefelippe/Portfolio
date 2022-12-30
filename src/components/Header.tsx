import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75 }}
      className="absolute top-0  p-5 w-screen z-40 snap-center justify-start bg-[#121212] bg-opacity-80 text-[#FFFFFFDE]"
    >
      <nav className="mx-auto flex items-center justify-between max-w-7xl ">
        <div>
          <Link href="#hero">
            <span className="logoBtn flex hover:text-[#a7a7a7] ">
              <p className="animate-pulse">_</p>pedrofelippe
            </span>
          </Link>
        </div>

        <nav className="flex justify-center items-center gap-10 ">
          <a href="#" className="">
            <FaGithub className="socialMediaIcon" />
          </a>
          <a href="#" className="">
            <FaLinkedinIn className="socialMediaIcon" />
          </a>
          <a href="#" className="">
            <FaInstagram className="socialMediaIcon" />
          </a>
        </nav>
      </nav>
    </motion.header>
  );
}
