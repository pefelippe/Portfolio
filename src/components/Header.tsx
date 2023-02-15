import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Icons from "./../atoms/Icons";

type Props = {};

function Header({}: Props) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex  gap-4 max-w-7xl mx-auto pt-6 md:pt-8 text-xl font-bold transition-all justify-between w-full  items-center max-xl:px-7 "
    >
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
        {/* <Link
          className={
            router.pathname === "/AboutPage"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/AboutPage"
        >
          <p>Quem sou</p>
        </Link> */}
        <Link
          className={
            router.pathname === "/ContactPage"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/ContactPage"
        >
          <p>Contato</p>
        </Link>
      </div>

      <Icons />
    </motion.div>
  );
}

export default Header;
