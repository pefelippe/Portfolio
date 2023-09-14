import { motion } from "framer-motion";
import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="text-[#8d8d99] gap-6 justify-center items-center
    font-thin text-sm md:text-md  mx-auto   flex p-8   w-screen flex-col"
    >
      <div className="w-full max-w-7xl justify-start items-start mx-auto  flex">
        <p className="flex text-lg">Pedro Felippe © {year}</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
