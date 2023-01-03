import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Links from "./Links";
import SocialIcons from "./SocialIcons";

type Props = {};

export default function Header({}: Props) {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="absolute top-0 p-3 w-screen z-40 snap-center justify-start bg-[#121212]  text-[#FFFFFFDE]"
    >
      <nav className="mx-auto flex items-center justify-between max-w-7xl ">
        <div>
          <Link href="#hero">
            <span className="logoBtn flex hover:text-[#a7a7a7] ">
              <p className="animate-pulse">_</p>pedrofelippe
            </span>
          </Link>
        </div>

        <Links />

        <SocialIcons />
      </nav>
    </motion.header>
  );
}
