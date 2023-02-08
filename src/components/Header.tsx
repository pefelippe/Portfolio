import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="relative w-full  z-40 pt-8  items-center  text-xl"
    >
      <div className="flex  max-w-7xl  justify-between mx-auto items-center">

      <Link
          className="text-2xl text-[#fff] font-semibold hover:text-[#5865f2]"
          href="/ "
        >
          <p>Pedro Felippe</p>
        </Link>


      <div className="flex tracking-wider items-center">
        <Link
          className="w-fit rounded-xl px-6 p-4  font-semibold border-4 border-[#5865f2] "
          href="/contact"
       
        >
          <p>Contato</p>
        </Link>
      </div>
 
     </div>
    </motion.header>
  );
}

export default Header;
