import { motion } from "framer-motion";

import React from "react";
import Links from "../Links";

const Navbar = () => {
  return (
    <motion.nav className=" text-white lg:absolute left-5 bottom-0 top-0 flex items-center justify-center">
      <Links />
    </motion.nav>
  );
};

export default Navbar;
