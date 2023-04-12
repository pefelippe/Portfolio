import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { styles } from "../../../styles/styles";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 1 }}
      className={` font-semibold mx-auto w-full flex max-w-7xl max-xl:px-10
       items-center h-[10vh] top-0 z-20 bg-primary`}
    >
      <HamburgerMenu />
    </motion.nav>
  );
};

export default Navbar;
