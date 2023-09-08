import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import AnimatedBtn from "../animated/AnimatedBtn";
import Links from "../Links";

const Navbar = () => {
  return (
    <motion.nav
      className="z-50 absolute h-[10vh] items-center text-white font-semibold justify-between mx-auto 
    text-2xl  flex  px-8 md:px-20  w-full "
    >
      <h1 className="font-medium">Pedro Felippe</h1>
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
