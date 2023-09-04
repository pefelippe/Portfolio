import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <motion.nav className="  p-8 text-gray-850  mx-auto font-light text-lg flex max-md:px-8 right-0 left-0 max-w-xl w-full">
      <nav className="justify-between w-full flex">
        <Link className="hover:text-blue" target="" href="/">
          Home
        </Link>
        <Link className="hover:text-blue" target="" href="/projects">
          Projects
        </Link>
        <Link className="hover:text-blue" target="" href="/contact">
          Contact
        </Link>
      </nav>
    </motion.nav>
  );
};

export default Navbar;
