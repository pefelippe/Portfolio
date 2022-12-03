import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/P.png";
type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ duration: 1.25 }}
      className="flex top-0 sticky justify-around p-4  z-30 bg-[#1f1f1ffa] "
    >
      <Link href="#hero">
        <Image
          src={Logo}
          alt="pefelippe avatar"
          className="object-fit relative h-10 w-10 "
        />
      </Link>

      <nav className="flex justify-evenly items-center max-md:hidden">
        <Link className="headerBtn" href="#hero">
          Home
        </Link>
        <Link className="headerBtn" href="#about">
          Sobre
        </Link>
        <Link className="headerBtn" href="#skills">
          Skills
        </Link>
        <Link className="headerBtn" href="/contact">
          Contato
        </Link>
      </nav>
    </motion.header>
  );
}
