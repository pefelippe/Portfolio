import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

import { styles } from "../../../styles/styles";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className={`${styles.paddingX}  max-w-7xl font-semibold mx-auto w-full flex 
      justify-between items-center h-[10vh] top-0 z-20 bg-primary`}
    >
      <div className="flex items-center">
        <Link href="/" className="text-bold text-3xl  text-white">
          <motion.img
            alt="avatar-pefelippe"
            src="assets/caneca.jpg"
            className="relative object-cover rounded h-[50px] w-[50px]"
          />
        </Link>
      </div>
      <HamburgerMenu />
    </motion.nav>
  );
};

export default Navbar;
