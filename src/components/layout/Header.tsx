import { motion } from "framer-motion";
import React from "react";

import Socials from "../Socials";

const Navbar = () => {
  return (
    <motion.nav className="h-[66px] text-[#000] bg-white w-screen font-semibold flex justify-center max-md:px-8">
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto text-[1.35rem]">
        <p>Pedro Felippe</p>
        <Socials />
      </div>
    </motion.nav>
  );
};

export default Navbar;
