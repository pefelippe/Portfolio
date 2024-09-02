import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="border-t w-full flex h-[10vh] text-center justify-center items-center  px-4 sm:px-6 lg:px-8 max-w-7xl  mx-auto  py-6 sm:py-10 gap-4 border-gray-100/10"
    >
      <p className="gap-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
        Pedro Felippe &copy; {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}

export default Footer;
