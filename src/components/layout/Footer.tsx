import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="font-normal uppercase text-gray-100  flex  max-w-7xl mx-auto  justify-center lg:justify-start text-lg ">
      <span className="py-20">© Pedro Felippe {year}</span>
    </motion.footer>
  );
}

export default Footer;
