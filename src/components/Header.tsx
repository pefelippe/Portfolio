import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFileDownload } from "react-icons/fa";

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
        transition={{ duration: 2 }}
        className="mx-auto flex items-center justify-between max-w-7xl  "
      >
        <Link href="#hero">
          <span className="logoBtn">
            pedrofelippe<p className="animate-pulse">_</p>
          </span>
        </Link>
        <a
          href="https://drive.google.com/file/d/1myzekVeAuc6z-zFfHRZ9Sy-mKLkQ1oLK/view?usp=sharing"
          className="border-2 border-[#222] hover:border-[#fff] hover:text-[#a7a7a7] rounded-xl transition-all flex gap-4  justify-center items-center p-3 font-semibold"
        >
          <FaFileDownload className=" text-[#fff]  " /> Curriculo
        </a>
      </motion.nav>
    </header>
  );
}
