import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimateLink from "../animated/AnimatedLink";
import Links from "../Links";

const Navbar = () => {
  return (
    <motion.nav
      className=" text-white flex items-center justify-between absolute w-full
    mx-auto h-[10vh] text-xl font-light px-8 z-50"
    >
      <AnimateLink href="/" className="text-2xl">
        Pedro Felippe
      </AnimateLink>
      
      <div className="flex gap-4 xl:gap-10">
        <AnimateLink href="/about" className="hover:text-blue hover:underline">
          About
        </AnimateLink>
        <AnimateLink
          href="/projects"
          className="hover:text-blue hover:underline"
        >
          Projects
        </AnimateLink>
        <AnimateLink
          href="/contact"
          className="hover:text-blue hover:underline"
        >
          Contact
        </AnimateLink>
      </div>

      {/* <Links /> */}
    </motion.nav>
  );
};

export default Navbar;
