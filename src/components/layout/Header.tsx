import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { navLinks } from "../../constants";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({
  isDarkMode,
  handleDarkMode,
}: {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}) => {
  return (
    <motion.nav
      className="font-medium w-full max-w-screen-md mx-auto max-lg:px-8  text-[1.25rem] py-6
       flex items-center "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex  justify-between items-center  mx-auto text-[1.5rem]"
      >
        <Link href="/">
          <h3 className="font-medium   hover:text-gray-300 transition-all">
            Pedro Felippe
          </h3>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" h-full flex items-center w-full justify-end "
      >
        <div className="max-md:hidden list-none flex items-center gap-2 pr-6">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <Link
                  className="rounded-xl p-2 cursor-pointer hover:text-blue transition-all"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>

        <button className=" focus:outline-none  " onClick={handleDarkMode}>
          <motion.div
            animate={{ rotate: isDarkMode ? 0 : 360 }}
            transition={{ duration: 0.5 }}
            style={{ display: isDarkMode ? "block" : "none" }}
          >
            <FaSun className="text-gray-900" />
          </motion.div>
          <motion.div
            animate={{ rotate: isDarkMode ? -360 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: isDarkMode ? "none" : "block" }}
          >
            <FaMoon className="text-[#fafafa]" />
          </motion.div>
        </button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
