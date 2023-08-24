import { motion } from "framer-motion";

import React from "react";

import Socials from "../Socials";

const Navbar = () => {
  return (
    <motion.nav
      className="h-[10vh] font-medium  w-full max-w-7xl mx-auto  text-[1.25rem] text-gray-100
       flex items-center justify-end"
    >
      <Socials />
    </motion.nav>
  );
};

export default Navbar;
