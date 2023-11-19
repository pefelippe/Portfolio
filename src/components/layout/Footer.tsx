import { motion } from "framer-motion";

import Links from "../Links";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="absolute bottom-4 left-0 right-0 z-20  ">
      <Links />
    </motion.footer>
  );
}

export default Footer;
