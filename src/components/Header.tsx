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
      className=" h-[10vh] top-0 left-0 right-0 flex z-40  gap-4 mx-auto  text-[20px] text-[#EFEFEF] font-semibold 
      transition-all justify-between w-full  items-center max-w-screen-2xl max-lg:px-8"
    >
      <Link href="/">
        <p>Pedro Felippe</p>
      </Link>
      <div className="flex gap-8 max-md:hidden">
        <Link
          className={
            router.pathname === "/"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/"
        >
          <p>Home</p>
        </Link>

        <Link
          className={
            router.pathname === "/AboutPage"
              ? "underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : "hover:decoration-[#5865f2]"
          }
          href="/AboutPage"
        >
          <p>Quem sou</p>
        </Link>

        {/* <Link
          className={
            router.pathname === "/"
              ? " underline decoration-2 decoration-[#5865f2] underline-offset-8"
              : ""
          }
          href="/"
        >
          <p>Artigos</p>
        </Link> */}
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

        {/* <p>TODO: localization</p> */}
      </div>

      <Icons />
    </motion.div>
  );
}

export default Header;
