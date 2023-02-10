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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex  max-w-7xl  mx-auto pt-8 text-xl font-bold transition-all w-full justify-between items-center max-xl:px-6 "
    >
      <Link href="/">
        <p className="text-2xl font-semibold">Pedro Felippe</p>
      </Link>

      <div className="flex gap-8">
        <Link
          className={
            router.pathname === "/"
              ? " underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/"
        >
          <p>Home</p>
        </Link>

        <Link
          className={
            router.pathname === "/About"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/About"
        >
          <p>Quem sou</p>
        </Link>

        <Link
          className={
            router.pathname === "/Contact"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/Contact"
        >
          <p>Contato</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Header;
