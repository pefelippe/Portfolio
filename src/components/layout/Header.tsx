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
import Socials from "../Socials";

const Navbar = ({
  isDarkMode,
  handleDarkMode,
}: {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}) => {
  return (
    <motion.nav
      className="h-[10vh] font-medium  w-full max-w-5xl mx-auto  text-[1.25rem] pt-8 
       flex items-center justify-between"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex  items-center  mx-auto text-[1.2rem] text-[#8F9BA8] justify-start "
      >
        <div className=" list-none flex items-center gap-8">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.id}>
                <Link
                  className="hover:underline underline-offset-8  font-medium  cursor-pointer  transition-all max-xs:hidden"
                  href={`${navLink.id}`}
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div>
      </motion.div>

      <Socials />

      {/* <motion.button
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
          <FaMoon className="text-gray-900" />
        </motion.div>
        <motion.div
          animate={{ rotate: isDarkMode ? -360 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: isDarkMode ? "none" : "block" }}
        >
          <FaSun className="text-[#fafafa]" />
        </motion.div>
      </motion.button> */}
    </motion.nav>
  );
};

export default Navbar;
