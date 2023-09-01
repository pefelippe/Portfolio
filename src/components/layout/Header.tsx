import { motion } from "framer-motion";
import React from "react";

import Link from "next/link";
import AnimatedBtn from "../animated/AnimatedBtn";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <motion.nav className="absolute gap-10 p-8 text-gray-850  mx-auto font-light flex justify-center max-md:px-8 ">
      <nav className="gap-10 flex">
        <Link target="" href="/">
          Home
        </Link>
        <Link target="" href="/">
          Projects
        </Link>
        <Link target="" href="/">
          Blog
        </Link>
        <Link target="" href="/contact">
          Contact
        </Link>
      </nav>
    </motion.nav>
  );
};

export default Navbar;
