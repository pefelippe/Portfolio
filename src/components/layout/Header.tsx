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
      className={`${styles.paddingX} font-semibold mx-auto w-full flex 
       items-center h-[10vh] top-0 z-20 bg-primary`}
    >
      <Link href="/" className="text-bold text-3xl  text-white">
        <motion.img
          alt="avatar-pefelippe"
          src="assets/caneca.jpg"
          className="relative object-cover rounded h-[50px] w-[50px] z-50"
        />
      </Link>

      <HamburgerMenu />
    </motion.nav>
  );
};

export default Navbar;
