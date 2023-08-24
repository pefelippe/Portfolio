import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="font-light uppercase text-gray-100  flex  max-w-7xl mx-auto  justify-center lg:justify-start "
    >
      <span className="py-10">© Pedro Felippe {year}</span>
    </motion.footer>
  );
}

export default Footer;
