import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className="flex max-w-7xl justify-between z-40 mx-auto w-full  pt-8 px-8  items-center"
    >
      <Link href="/">
        <span className="font-bold text-xl cursor-pointer transition-all hover:text-gray-700">
          pedrofelippe_
        </span>
      </Link>

      <div className="flex items-center gap-8 font-semibold ">
        <Link href="/contact">
          <button className="text-xl rounded-full border-2 transition-all  px-6 p-2 text-[#fff] hover:border-[#3f4de9] hover:bg-[#3f4de9]">
            Contato
          </button>
        </Link>
      </div>
    </motion.header>
  );
}

export default Header;
