import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="h-[10vh] font-light text-gray-100 py-10 flex  text-md  w-full max-w-7xl mx-auto  justify-center lg:justify-start  "
    >
      <span className="">Pedro Felippe. © {year}. All rights reserved.</span>
    </motion.footer>
  );
}

export default Footer;
