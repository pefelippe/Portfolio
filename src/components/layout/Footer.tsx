import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" py-10 gap-4 flex-col border-t border-gray-700  mx-auto text-gray-300
   text-sm font-normal justify-center items-center flex   text-center section max-w-screen-2xl"
    >
      <p>Designed & developed by Pedro Felippe - {year}</p>
    </motion.footer>
  );
}

export default Footer;
