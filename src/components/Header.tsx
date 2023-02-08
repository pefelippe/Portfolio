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
      className="absolute w-full z-40 pt-10 items-center text-xl"
    >
      <div className="flex  justify-center mx-auto gap-10 md:gap-20">

      <Link
          className="w-fit rounded-xl   font-semibold hover:text-[#5865f2]"
          href="/"
       
        >
          <p>Home</p>
        </Link>

        <Link
          className="w-fit rounded-xl  font-semibold hover:text-[#5865f2]"
       
          href="/details"
        >
          <p>Sobre</p>
        </Link>

        <Link
          className="w-fit rounded-xl   font-semibold hover:text-[#5865f2]"
          href="/projects"
       
        >
          <p>Projetos</p>
        </Link>

        <Link
          className="w-fit rounded-xl   font-semibold hover:text-[#5865f2]"
          href="/contact"
       
        >
          <p>Contato</p>
        </Link>
      </div>
 
     
    </motion.header>
  );
}

export default Header;
