import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <motion.nav
      className=" h-[10vh] items-center text-white font-semibold  mx-auto  justify-between
    text-xl  flex px-10  w-full z-40"
    >
      <Link className="font-medium hover:text-blue" target="" href="/">
        Pedro Felippe
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
