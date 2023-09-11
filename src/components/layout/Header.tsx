import { motion } from "framer-motion";

import React from "react";

import Links from "../Links";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      className="z-50  h-[10vh] items-center text-white font-semibold justify-between mx-auto 
    text-3xl  flex px-10  w-full "
    >
      <Link className="font-medium hover:text-blue" target="" href="/">
        Pedro Felippe
      </Link>

      {/* <nav className=" flex gap-14 text-md items-center justify-center ">
        <Link className="hover:text-blue" target="" href="#projects">
          Projects
        </Link>
        <Link className="hover:text-blue" target="" href="#contact">
          Contact
        </Link>
      </nav> */}
      <Links />
    </motion.nav>
  );
};

export default Navbar;
