import { motion } from "framer-motion";

import React from "react";
import Links from "../Links";

const Navbar = () => {
  return (
    <motion.nav className=" text-white lg:absolute left-5 bottom-5">
      <Links />
    </motion.nav>
  );
};

export default Navbar;
