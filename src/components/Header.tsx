import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Icons from "../atoms/Icons";

type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex gap-8 max-w-7xl mx-auto pt-10 text-2xl 8 w-full justify-between items-center max-xl:px-10"
    >
      <Link className="font-bold hover:text-[#3948eb] transition-all" href="/">
        <p>Pedro Felippe</p>
      </Link>

      <Icons />
    </motion.div>
  );
}

export default Header;
