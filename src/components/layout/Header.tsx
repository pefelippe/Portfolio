import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <motion.nav
      className="font-medium w-full max-w-5xl  mx-auto h-[8vh] max-lg:px-8 shadow-current px-2 border-b-[1px] border-gray-100
       flex items-center "
    >
      <div className="w-full flex  justify-between items-center max-w-5xl mx-auto">
        <Link href="/">
          <h3 className="font-medium  text-xl hover:text-gray-300 transition-all">
            Pedro Felippe
          </h3>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" h-full flex items-center w-full justify-end "
      >
        <div className=" list-none text-gray-300 text-lg  flex items-center gap-4">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <Link
                  className="rounded-xl p-2 cursor-pointer  hover:text-blue  transition-all"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
