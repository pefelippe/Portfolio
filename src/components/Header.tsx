import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimatedBtn from "./motion/AnimatedBtn";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="flex max-w-7xl justify-between z-40 mx-auto w-full pt-4 px-8 items-center"
    >
      <Link href="/">
        <span className="font-bold text-2xl cursor-pointer transition-all hover:text-gray-300">
          pedrofelippe_
        </span>
      </Link>

      <div className="flex gap-8 items-center justify-center pt-4">
        <AnimatedBtn
          className="w-fit rounded-xl text-xl font-semibold text-gray-100 hover:text-[#3b47ca]"
          href="https://resume.io/r/m2cn8pnqu"
        >
          <p>Currículo</p>
        </AnimatedBtn>

        <AnimatedBtn
          className="w-fit text-xl font-semibold  border-2 px-6 p-3 rounded-full bg-[#3b47ca] border-[#3b47ca] "
          target=""
          href="/contact"
        >
          <p>Contato</p>
        </AnimatedBtn>
      </div>
    </motion.header>
  );
}

export default Header;
