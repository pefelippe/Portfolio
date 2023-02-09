import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Icons from "../atoms/Icons";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex gap-8 max-w-7xl mx-auto pt-10 text-xl font-bold 8  transition-all w-full justify-between items-center max-xl:px-10 text-gray-300"
    >
      <div className="flex gap-8">
        <Link
          className={
            router.pathname === "/"
              ? "text-[#fff] hover:text-[#5865f2]"
              : "hover:text-[#5865f2]"
          }
          href="/"
        >
          <p>Home</p>
        </Link>

        <Link
          className={router.pathname === "/Contact" ? "text-[#fff] hover:text-[#5865f2]" : "hover:text-[#5865f2]"}
          href="/Contact"
        >
          <p>Contato</p>
        </Link>
      </div>

      <Icons />
    </motion.div>
  );
}

export default Header;
