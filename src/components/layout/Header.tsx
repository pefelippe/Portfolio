import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <motion.nav
      className=" h-[10vh]  text-white font-semibold  mx-auto  justify-end items-center
    text-lg  flex px-10  w-full z-40 bg-[#0f0f00] gap-20"
    >
      <Link className="font-medium hover:text-blue " target="" href="/">
        Home
      </Link>

      {/*<Link className="font-medium hover:text-blue" target="" href="/projects">
        Projects
      </Link>*/}

      <Link className="font-medium hover:text-blue" target="" href="/contact">
        Contact
      </Link>
    </motion.nav>
  );
};

export default Navbar;
