import Link from "next/link";
import React, { useState } from "react";

import { styles } from "../../../styles/styles";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX}  max-w-screen-2xl font-semibold mx-auto w-full flex 
      justify-between items-center pt-4 top-0 z-20 bg-primary`}
    >
      {/* <SocialLinks /> */}
      <div className="flex items-center">
        <Link href="/" className="text-bold text-2xl  text-white">
          Pedro Felippe
        </Link>
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
