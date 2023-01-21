import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex py-5  max-w-7xl mx-auto  text-lg justify-end max-sm:justify-center max-lg:px-5"
    >
      <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/projects">Projetos</Link>
      </div>
    </motion.header>
  );
}

export default Header;
