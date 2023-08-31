import { motion } from "framer-motion";
import React from "react";

import Socials from "../Socials";

const Navbar = () => {
  return (
    <motion.nav className="absolute p-8 py-6 text-[#FFF]  w-screen font-light flex justify-start max-md:px-8">
      <div className="flex items-start justify-between w-full mx-auto text-[1.35rem]">
        <p className="text-[1.8rem] md:text-[2.8rem] font-semibold uppercase ">
          Pedro Felippe
        </p>
        <Socials />
      </div>
    </motion.nav>
  );
};

export default Navbar;
