import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex gap-8 justify-end p-10"
    >
      <div className="text-2xl flex gap-8 tracking-wider items-center text-gray-300 pb-10">
        <Link
          className="flex  rounded-full  font-semibold hover:underline"
          href="/"
        >
          <p>Home</p>
        </Link>
        <Link
          className="flex  rounded-full  font-semibold hover:underline"
          href="/About"
        >
          <p>Quem sou</p>
        </Link>

        <Link
          className=" rounded-full  font-semibold  hover:underline "
          href="/Contact"
        >
          <p>Contato</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
