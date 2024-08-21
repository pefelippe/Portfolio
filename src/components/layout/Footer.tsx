import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 1 }}
      className="border-t w-full flex mt-16 text-center justify-between items-center max-md:p-6 max-w-screen-md mx-auto  py-6 sm:py-10 gap-4 border-gray-100/10"
    >
      <p className="gap-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
        Pedro Felippe &copy; {new Date().getFullYear()}
      </p>

      <motion.div
        className="flex gap-4 "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link href="https://github.com/pefelippe" target="_blank">
          <FaGithub className="text-2xl text-gray-600 dark:text-gray-400 hover:text-gray-800" />
        </Link>
        <Link href="https://www.linkedin.com/in/pedro-felippe/" target="_blank">
          <FaLinkedin className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-600" />
        </Link>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
