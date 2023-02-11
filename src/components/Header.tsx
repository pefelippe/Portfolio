import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Icons from "../atoms/Icons";

type Props = {};

function Header({}: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex  max-w-7xl  mx-auto pt-8 text-xl font-bold transition-all w-full justify-between items-center max-xl:px-10 "
    >
      <Link href="/">
        <p className="text-2xl font-semibold hover:text-gray-300">
          Pedro Felippe
        </p>
      </Link>
      <Icons />
    </motion.div>
  );
}

export default Header;
