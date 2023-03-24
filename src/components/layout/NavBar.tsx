import React, { useState } from "react";

import { styles } from "../../../styles/styles";

import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} max-w-screen-2xl font-semibold mx-auto w-full flex justify-between  py-8 top-0 z-20 bg-primary  `}
    >
      <SocialLinks />
      <HamburgerMenu />
    </nav>
  );
};

export default Navbar;
