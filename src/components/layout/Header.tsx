import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  FaFilePdf,
  FaGithub,
  FaLinkedinIn,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { navLinks } from "../../constants";
import AnimatedBtn from "../animated/AnimatedBtn";

const Navbar = ({
  isDarkMode,
  handleDarkMode,
}: {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}) => {
  return (
    <motion.nav
      className="font-medium  w-full max-w-4xl mx-auto max-lg:px-8  text-[1.25rem] pt-8 justify-between
       flex items-center "
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex  items-center  mx-auto text-[1rem] text-[#8F9BA8]  "
      >
        <div className=" list-none flex items-center gap-3">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <Link
                  className="hover:bg-gray-900 font-medium rounded-xl p-3 px-4 cursor-pointer hover:text-white transition-all max-md:hidden"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" focus:outline-none  "
        onClick={handleDarkMode}
      >
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
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;
