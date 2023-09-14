import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimateLink from "../animated/AnimatedLink";
import Links from "../Links";

const Navbar = () => {
  return (
    <motion.nav
      className="absolute w-full
      items-center justify-center flex mx-auto  bg-gray-600
      h-[77px] text-xl font-normal z-20 backdrop-blur-sm "
    >
      <div className=" max-w-7xl mx-auto px-8 justify-between flex items-center w-full">
        <AnimateLink href="/" className="text-xl text-[#fff] font-semibold">
          Pedro Felippe
        </AnimateLink>
        <div className="flex text-gray-100">
          <AnimateLink href="/about" className="headerLink">
            About
          </AnimateLink>
          <AnimateLink href="/projects" className="headerLink">
            Projects
          </AnimateLink>
          <AnimateLink href="/contact" className="headerLink">
            Contact
          </AnimateLink>
        </div>

        <Links />
      </div>
    </motion.nav>
  );
};

export default Navbar;
