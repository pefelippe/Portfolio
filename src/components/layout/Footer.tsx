import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="py-20 bg-white   w-screen font-light uppercase text-gray-850 leading-relaxed  flex  mx-auto  
    justify-center lg:justify-start text-lg max-xl:px-8"
    >
      <div className="w-full max-w-7xl  mx-auto  ">
        <span className="">© Pedro Felippe {year}</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
